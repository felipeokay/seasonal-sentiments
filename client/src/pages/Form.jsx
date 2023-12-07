import axios from "axios";
import { useState, useEffect } from "react";
import { useStoreContext } from '../utils/GlobalState';
import { idbPromise } from '../utils/helpers'

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [imageChoice, setImageChoice] = useState("green");
  const [senderName, setSenderName] = useState("");
  const [friendName, setFriendName] = useState("");
  // const [bccEmails, setBccEmails] = useState([""]);
  const [successMessage, setSuccessMessage] = useState("");
  const [state, dispatch] = useStoreContext();
  console.log(state);

  const [cartImageUrl, setCartImageUrl] = useState('');


  // const handleBccEmailChange = (index, value) => {
  //   const updatedBccEmails = [...bccEmails];
  //   updatedBccEmails[index] = value;
  //   setBccEmails(updatedBccEmails);
  // };

  // const addBccRecipient = () => {
  //   setBccEmails([...bccEmails, ""]);
  // };

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      console.log(cart);
      setCartImageUrl(cart[0].image_url)
    }
    getCart();
  }, [])


  const sendEmail = async (e) => {
    e.preventDefault();

    const imageUrl =
      state.image_url;

    const data = {
      email,
      message,
      senderName,
      friendName,
      imageUrl: cartImageUrl,
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
    <div className="max-w-lg mx-auto bg-[#4d6242] p-12 rounded-md shadow-md mt-8 my-10">      
        <img src={cartImageUrl}/>
        <form className='w-400' onSubmit={sendEmail}>
           <label className='text-white' htmlFor="senderName">Your name: </label>
            <input className="w-100 block"
              type="text"
              id="senderName"
              required
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          
            <label className='text-white' htmlFor="friendName">Friend's name: </label>
            <input
              type="text"
              id="friendName"
              required
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
            />
          
          
            <label className='text-white' htmlFor="email">Friend's Email: </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          
            <label className='text-white' htmlFor="message">Include a personal message: </label>
            <input
              type="textarea"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          
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
          
            <button className='text-white' type="submit">Send Card</button>
          
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>    
  );
}

export default Form;