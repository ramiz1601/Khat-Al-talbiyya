import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory + persisted store for quote requests and inquiries
const INQUIRIES_FILE = path.join(__dirname, 'inquiries.json');
interface TransportationInquiry {
  id: string;
  name: string;
  company?: string;
  phone: string;
  email?: string;
  service: string;
  vehicleCount?: string;
  contractType?: string;
  message: string;
  createdAt: string;
  status: 'received' | 'in_review';
}

let inquiries: TransportationInquiry[] = [];
try {
  if (fs.existsSync(INQUIRIES_FILE)) {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    inquiries = JSON.parse(raw);
  }
} catch {
  inquiries = [];
}

// POST: Register business inquiry or quote request
app.post('/api/inquiries', (req, res) => {
  const { name, company, phone, email, service, vehicleCount, contractType, message } = req.body;

  if (!name || !phone || !service) {
    return res.status(400).json({
      error: 'Please provide full name, contact number (Phone/WhatsApp), and required service.'
    });
  }

  const newInquiry: TransportationInquiry = {
    id: `KT-${Date.now().toString().slice(-6)}`,
    name: String(name).trim(),
    company: company ? String(company).trim() : '',
    phone: String(phone).trim(),
    email: email ? String(email).trim() : '',
    service: String(service).trim(),
    vehicleCount: vehicleCount ? String(vehicleCount).trim() : '1-2 Vehicles',
    contractType: contractType ? String(contractType).trim() : 'Corporate Agreement',
    message: message ? String(message).trim() : '',
    createdAt: new Date().toISOString(),
    status: 'received'
  };

  inquiries.unshift(newInquiry);

  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries.slice(0, 100), null, 2));
  } catch (err) {
    console.error('Failed to write inquiries file:', err);
  }

  return res.status(201).json({
    success: true,
    message: 'Your transportation request has been logged successfully. Our operations team in Doha will reach out shortly.',
    inquiry: newInquiry
  });
});

// GET: Retrieve recent inquiries
app.get('/api/inquiries', (_req, res) => {
  return res.json({ inquiries: inquiries.slice(0, 25) });
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'operational',
    company: 'Khat Al Talbiyya Transportation',
    location: 'Doha, Qatar',
    timestamp: new Date().toISOString()
  });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production' || process.env.RENDER || false;

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Khat Al Talbiyya server running on port ${PORT}`);
  });
}

startServer();
