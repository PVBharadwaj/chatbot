const dotenv = require ("dotenv");

dotenv.config({path: "../.env"});


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('MONGO_URI is not defined in .env file');
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

app.use('/chatbot', require('./routes/chatbot'));


const Schema = mongoose.Schema;
// const DataSchema = new Schema({
//   name: String,
//   email: String,
//   amount: Number,
// },{ timestamps: true });
const DataSchema = new Schema({

  np: Number,
  username: String,
  phone: Number,
},{ timestamps: true });
const DataModel = mongoose.model('Data', DataSchema);

// API endpoints
// app.get('/api/data', async (req, res) => {
//   try {
//     const data = await DataModel.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });




app.get('/api/data', async (req, res) => {
  try {
    // Fetch the latest document based on a timestamp or creation date
    const Data = await DataModel.findOne().sort({ createdAt: -1 });

    // Check if there is data
    if (!Data) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.json(Data);
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ message: 'An error occurred while fetching data.' });
  }
});



// app.get('/api/data', async (req, res) => {
//   try {
//     // Fetch the latest document based on a timestamp or creation date
//     const Data = await DataModel.findOne().sort({ createdAt: -1 }); // Assuming you have a createdAt field
//     // const data = await DataModel.find();
//     res.json(Data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post('/api/data', async (req, res) => {
//   const { name, email, amount } = req.body;
//   const newData = new DataModel({ name, email, amount });
//   try {
//     const savedData = await newData.save();
//     res.status(201).json(savedData);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
