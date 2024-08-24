const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  userMessage: String,
  botReply: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Conversation', conversationSchema);
