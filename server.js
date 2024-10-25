import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sendMailRouter from './routes/sendMail-routes.js';  // Adjust path as necessary

dotenv.config(); // Load environment variables
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Main route
app.get('/', (req, res) => {
    res.send("Welcome to the server");
});

// Email sending route
app.use('/sendmail', sendMailRouter);  // This sets up the /sendmail/send endpoint

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
