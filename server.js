const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let users = [{ email: 'sumankumarpradhan81@gmail.com', password: 'Suman@2453' }]; // Dummy user storage
let appointments = []; // Dummy appointment storage

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.json({ message: 'User registered successfully!' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/book-appointment', (req, res) => {
    const { email, date, time } = req.body;
    appointments.push({ email, date, time });
    res.json({ message: 'Appointment booked successfully!' });
});

app.get('/appointments', (req, res) => {
    res.json(appointments);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
