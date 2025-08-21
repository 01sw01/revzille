import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'example@example.com',
    pass: process.env.SMTP_PASS || 'example-password',
  },
});

export const sendAdminNotification = async (signupData: {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
}) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'noreply@example.com',
    to: 'sobiaaijazmalik@gmail.com',
    subject: 'New Trial Signup - Action Required',
    html: `
      <h2>New Trial Signup Alert</h2>
      <p>A new user has signed up for a trial account. Here are the details:</p>
      
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Name:</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${signupData.name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Company:</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${signupData.companyName}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email:</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${signupData.email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Phone:</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${signupData.phoneNumber}</td>
        </tr>
      </table>
      
      <p>Please follow up with this lead as soon as possible.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent successfully');
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    // Don't throw error to avoid breaking signup process
  }
};

export const sendWelcomeEmail = async (userEmail: string, userName: string) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'noreply@example.com',
    to: userEmail,
    subject: 'Welcome to Your Free Trial!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb; text-align: center;">Welcome to Your Free Trial!</h1>
        
        <p>Hi ${userName},</p>
        
        <p>Thank you for signing up for our free trial! We're excited to have you on board.</p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
          <ul>
            <li>Explore our platform features</li>
            <li>Set up your first project</li>
            <li>Contact our support team if you need help</li>
          </ul>
        </div>
        
        <p>Your trial gives you full access to all features for the next 30 days. If you have any questions or need assistance, don't hesitate to reach out to our support team.</p>
        
        <p style="margin-top: 30px;">
          Best regards,<br>
          The Support Team
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="font-size: 12px; color: #6b7280; text-align: center;">
          This email was sent because you signed up for a trial account. If you didn't request this, please ignore this email.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully to:', userEmail);
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    // Don't throw error to avoid breaking signup process
  }
};