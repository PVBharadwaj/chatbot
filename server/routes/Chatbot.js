// server/routes/chatbot.js
const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');

router.post('/', async (req, res) => {
  const { message } = req.body;

  let reply;
  if (message.toLowerCase().includes('hello')) {
    reply = 'Hello! How can I assist you today?';
  } else {
    reply = 'I am here to help with your museum ticket booking!';
  }

  // Store conversation
  const conversation = new Conversation({ userMessage: message, botReply: reply });
  await conversation.save();

  res.json({ reply });
});

module.exports = router;
