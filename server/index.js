const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const SHEET_ID = '1a3giV9XL4L0h6qTNYCzTCkr1L5L0SZNsPOO6DerQiNo';
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');

async function getSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

async function ensureHeaders(sheets, sheetName, headers) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${sheetName}!A1:Z1`,
  });
  if (!res.data.values || res.data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${sheetName}!A1`,
      valueInputOption: 'RAW',
      requestBody: { values: [headers] },
    });
  }
}

// Contact API
app.post('/api/contact', async (req, res) => {
  try {
    const sheets = await getSheets();
    await ensureHeaders(sheets, 'Contact', ['Name', 'Email', 'Phone', 'Subject', 'Message', 'Date']);
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Contact!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          req.body.first_name,
          req.body.email,
          req.body.phone,
          req.body.subject,
          req.body.message,
          new Date().toLocaleString()
        ]]
      }
    });
    res.json({ data: { id: 1 }, error: null });
  } catch (error) {
    console.error('Contact error:', error.message);
    res.status(500).json({ data: null, error: error.message });
  }
});

// Feedback POST
app.post('/api/feedback', async (req, res) => {
  try {
    const sheets = await getSheets();
    await ensureHeaders(sheets, 'Feedback', ['Name', 'Location', 'Product', 'Rating', 'Comment', 'Date']);
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Feedback!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          req.body.name,
          req.body.location,
          req.body.product_name,
          req.body.rating,
          req.body.comment,
          new Date().toLocaleString()
        ]]
      }
    });
    res.json({ data: { id: 1 }, error: null });
  } catch (error) {
    console.error('Feedback error:', error.message);
    res.status(500).json({ data: null, error: error.message });
  }
});

// Feedback GET
app.get('/api/feedback', async (req, res) => {
  try {
    const sheets = await getSheets();
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Feedback!A:F',
    });
    const rows = result.data.values || [];
    // Skip header row
    const data = rows.slice(1).map((r, i) => ({
      _id: i + 1,
      name: r[0] || '',
      location: r[1] || '',
      product_name: r[2] || '',
      rating: Number(r[3]) || 5,
      comment: r[4] || '',
      verified: false,
      created_at: r[5] || ''
    }));
    res.json({ data, error: null });
  } catch (error) {
    console.error('Get feedback error:', error.message);
    res.status(500).json({ data: [], error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📊 Data saving to Google Sheets: ${SHEET_ID}`);
});
