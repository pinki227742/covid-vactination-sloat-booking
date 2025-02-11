document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    document.getElementById('message').innerText = data.message;
});

document.getElementById('appointmentForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value; // Make sure user is logged in
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const response = await fetch('http://localhost:4000/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, date, time })
    });

    const data = await response.json();
    document.getElementById('appointmentMessage').innerText = data.message;
});
