const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.VITE_MONGODB_URI;
const DB_NAME = process.env.VITE_DB_NAME || 'shree_kalyani_foods';

let client;

async function connectDB() {
  try {
    client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('✅ Connected to MongoDB Atlas successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('Please check your connection string and credentials');
  }
}

// Contact API
app.post('/api/contact', async (req, res) => {
  try {
    const db = client.db(DB_NAME);
    const now = new Date();
    const result = await db.collection('contact_messages').insertOne({
      ...req.body,
      created_at: now,
      updated_at: now
    });
    res.json({ data: { id: result.insertedId }, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: error.message });
  }
});

// Feedback APIs
app.post('/api/feedback', async (req, res) => {
  try {
    const db = client.db(DB_NAME);
    const now = new Date();
    const result = await db.collection('customer_feedback').insertOne({
      ...req.body,
      verified: false,
      helpful: 0,
      created_at: now,
      updated_at: now
    });
    res.json({ data: { id: result.insertedId }, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: error.message });
  }
});

app.get('/api/feedback', async (req, res) => {
  try {
    const db = client.db(DB_NAME);
    const data = await db.collection('customer_feedback')
      .find({})
      .sort({ created_at: -1 })
      .toArray();
    res.json({ data, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: error.message });
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});