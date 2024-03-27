// Function to update the current time
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    currentTimeElement.textContent = `Time: ${hours}:${minutes}:${seconds}`;
}

// Function to add a medicine reminder
function addReminder() {
    const medicineName = document.getElementById('medicineName').value;
    const reminderTime = document.getElementById('reminderTime').value;
    const userEmail = document.getElementById('userEmail').value;

    // Create reminder item
    const reminderItem = document.createElement('li');
    reminderItem.classList.add('reminder-item');

    // Display the reminder information
    reminderItem.innerHTML = `
        <div>${medicineName} - ${reminderTime}</div>
        <button class="delete-btn" onclick="deleteReminder(this)">Delete</button>
    `;

    // Add the reminder to the list
    const remindersList = document.getElementById('reminders');
    remindersList.appendChild(reminderItem);

    // Set up the alarm for the reminder
    setupAlarm(reminderTime, medicineName, userEmail);

    // Clear input fields
    document.getElementById('medicineName').value = '';
    document.getElementById('reminderTime').value = '';
    document.getElementById('userEmail').value = '';
}

// Function to delete a reminder
function deleteReminder(buttonElement) {
    const reminderItem = buttonElement.parentElement;
    const remindersList = document.getElementById('reminders');
    remindersList.removeChild(reminderItem);
}

// Function to set up the alarm for the reminder
function setupAlarm(reminderTime, medicineName, userEmail) {
    const currentTime = new Date();
    const [hours, minutes] = reminderTime.split(':');
    const reminderDate = new Date();
    reminderDate.setHours(hours, minutes, 0, 0);

    // Calculate the time difference in milliseconds
    const timeDifference = reminderDate.getTime() - currentTime.getTime();

    // Set up the alarm
    if (timeDifference > 0) {
        setTimeout(() => {
            // Play alarm sound
            const alarmSound = new Audio('./alarm.wav'); // Path to your alarm sound file
            alarmSound.play();

            // Send reminder email
            sendReminderEmail(medicineName, userEmail);
        }, timeDifference);
    }
}

// Function to send reminder email
function sendReminderEmail(medicineName, userEmail) {
    const sendGridApiKey = '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'; // Replace this with your SendGrid API key

    const data = {
        personalizations: [
            {
                to: [{ email: userEmail }],
                subject: 'Medicine Reminder'
            }
        ],
        from: { email: 'sampatiraomohankumar@gmail.com' }, // Replace this with your email address
        content: [
            {
                type: 'text/plain',
                value: `Don't forget to take your ${medicineName}!`
            }
        ]
    };

    fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sendGridApiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully!');
        } else {
            console.error('Failed to send email:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Update the current time immediately on page load
updateCurrentTime();
