const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail.js");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.options("/api/sendemail", cors());

app.post("/api/sendemail", async (req, res) => {
  const { email, message, senderName, friendName, imageUrl } = req.body;

  try {
    const send_to = email;
    const sent_from = "Seasonal Sentiments";
    const reply_to = email;
    const subject = "A special holiday greeting from " + senderName;
    const emailText = message;

    await sendEmail(subject, emailText, send_to, sent_from, reply_to, imageUrl, friendName, senderName);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  app.use('/images', express.static(path.join(__dirname, '../client/images')));

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();