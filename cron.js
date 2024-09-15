import cron from 'node-cron';
import nodemailer from 'nodemailer';
import Task from './models/Task.js';
import Log from './models/Log.js';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Example: Send reminder email every minute
cron.schedule('* * * * *', async () => {
    console.log('Running email cron job');

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'dummy-email@example.com',
        subject: 'Reminder',
        text: 'This is a reminder email.',
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent');

        // Log the task execution
        await Log.create({ task: 'Send Reminder Email', status: 'Success' });
    } catch (error) {
        console.log('Error sending email', error);
        await Log.create({ task: 'Send Reminder Email', status: 'Failure', error: error.message });
    }
});
