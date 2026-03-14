const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');
=======
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
>>>>>>> a645a6c828bd6b8efbb43c980817aade1091aeb0

const app = express();
const PORT = 3002;

app.use(cors());
<<<<<<< HEAD
app.use(express.json({ limit: '10mb' }));

const EXCEL_FILE = path.join(__dirname, 'data.xlsx');

function readWorkbook() {
  if (fs.existsSync(EXCEL_FILE)) {
    return XLSX.readFile(EXCEL_FILE);
  }
  return XLSX.utils.book_new();
}

function getSheet(wb, sheetName) {
  return wb.Sheets[sheetName]
    ? XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
    : [];
}

function saveSheet(wb, sheetName, rows) {
  const ws = XLSX.utils.json_to_sheet(rows);
  if (wb.SheetNames.includes(sheetName)) {
    wb.Sheets[sheetName] = ws;
  } else {
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
  }
  XLSX.writeFile(wb, EXCEL_FILE);
}

// Contact API
app.post('/api/contact', (req, res) => {
  try {
    const wb = readWorkbook();
    const rows = getSheet(wb, 'Contact');
    rows.push({
      Name: req.body.first_name,
      Email: req.body.email,
      Phone: req.body.phone,
      Subject: req.body.subject,
      Message: req.body.message,
      Date: new Date().toLocaleString()
    });
    saveSheet(wb, 'Contact', rows);
    res.json({ data: { id: rows.length }, error: null });
=======
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
>>>>>>> a645a6c828bd6b8efbb43c980817aade1091aeb0
  } catch (error) {
    res.status(500).json({ data: null, error: error.message });
  }
});

// Feedback APIs
<<<<<<< HEAD
app.post('/api/feedback', (req, res) => {
  try {
    const wb = readWorkbook();
    const rows = getSheet(wb, 'Feedback');
    rows.push({
      Name: req.body.name,
      Location: req.body.location,
      Product: req.body.product_name,
      Rating: req.body.rating,
      Comment: req.body.comment,
      Date: new Date().toLocaleString()
    });
    saveSheet(wb, 'Feedback', rows);
    res.json({ data: { id: rows.length }, error: null });
=======
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
>>>>>>> a645a6c828bd6b8efbb43c980817aade1091aeb0
  } catch (error) {
    res.status(500).json({ data: null, error: error.message });
  }
});

<<<<<<< HEAD
app.get('/api/feedback', (req, res) => {
  try {
    const wb = readWorkbook();
    const rows = getSheet(wb, 'Feedback');
    const data = rows.map((r, i) => ({
      _id: i + 1,
      name: r.Name,
      location: r.Location,
      product_name: r.Product,
      rating: Number(r.Rating),
      comment: r.Comment,
      verified: false,
      created_at: r.Date
    }));
    res.json({ data, error: null });
  } catch (error) {
    res.status(500).json({ data: [], error: error.message });
  }
});

// Download Excel sheets
app.get('/api/export/feedback', (req, res) => {
  try {
    const wb = readWorkbook();
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx', Sheets: ['Feedback'] });
    res.setHeader('Content-Disposition', 'attachment; filename="feedback.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buf);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/export/contact', (req, res) => {
  try {
    const wb = readWorkbook();
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx', Sheets: ['Contact'] });
    res.setHeader('Content-Disposition', 'attachment; filename="contact_messages.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buf);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📊 Data stored in: ${EXCEL_FILE}`);
});
=======
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
>>>>>>> a645a6c828bd6b8efbb43c980817aade1091aeb0
