import axios from "axios";
import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [imageChoice, setImageChoice] = useState("green");
  const [senderName, setSenderName] = useState("");
  const [friendName, setFriendName] = useState("");
  // const [bccEmails, setBccEmails] = useState([""]);
  const [successMessage, setSuccessMessage] = useState("");

  // const handleBccEmailChange = (index, value) => {
  //   const updatedBccEmails = [...bccEmails];
  //   updatedBccEmails[index] = value;
  //   setBccEmails(updatedBccEmails);
  // };

  // const addBccRecipient = () => {
  //   setBccEmails([...bccEmails, ""]);
  // };

  const sendEmail = async (e) => {
    e.preventDefault();

    const imageUrl =
      imageChoice === "green"
        ? "https://i.imgur.com/zLJlwrX.png"
        : "https://i.imgur.com/NQbHvXR.png";

    const data = {
      email,
      message,
      senderName,
      friendName,
      imageUrl,
      // bccEmails,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/sendemail",
        data
      );
      console.log(response.data);

      setEmail("");
      setMessage("");
      setSenderName("");
      setFriendName("");
      // setBccEmails([""]);

      setSuccessMessage("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="senderName">Your name:</label>
            <input
              type="text"
              id="senderName"
              required
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="friendName">Friend's name:</label>
            <input
              type="text"
              id="friendName"
              required
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Friend's Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Include a personal message:</label>
            <input
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* <div>
            <label htmlFor="bccEmails">BCC Recipients:</label>
            {bccEmails.map((bccEmail, index) => (
              <div key={index}>
                <input
                  type="email"
                  id={`bccEmail${index}`}
                  value={bccEmail}
                  onChange={(e) => handleBccEmailChange(index, e.target.value)}
                  placeholder="Enter BCC recipient email"
                />
              </div>
            ))}
            <button type="button" onClick={addBccRecipient}>
              Add BCC Recipient
            </button>
          </div> */}
          <div>
            <label>Choose Image:</label>
            <div>
              <input
                type="radio"
                id="greenImage"
                name="imageChoice"
                value="green"
                checked={imageChoice === "green"}
                onChange={() => setImageChoice("green")}
              />
              <label htmlFor="greenImage">Green Image</label>
            </div>
            <div>
              <input
                type="radio"
                id="blueImage"
                name="imageChoice"
                value="blue"
                checked={imageChoice === "blue"}
                onChange={() => setImageChoice("blue")}
              />
              <label htmlFor="blueImage">Blue Image</label>
            </div>
          </div>
          <div>
            <button type="submit">Send Card</button>
          </div>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
}

export default Form;