
//generateAccountCreatedHtml

export const generateAccountCreatedHtml = (name: string) => {
  const html = `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 30px;
      background-color: #f8f9fa;
      color: #333;
    ">

      <div style="
        background-color: #ffffff;
        padding: 30px;
        border-radius: 10px;
      ">

        <h1 style="
          color: #2c3e50;
          margin-bottom: 20px;
        ">
          Welcome to Our Platform! 🎉
        </h1>

        <p>
          Hello ${name},
        </p>

        <p>
          Your account has been created successfully.
          We're happy to have you with us!
        </p>

        <p>
          You can now log in and start exploring our platform.
        </p>

        <div style="
          margin-top: 30px;
          padding: 15px;
          background-color: #f1f5f9;
          border-radius: 6px;
        ">
          <p style="margin: 0;">
            If you did not create this account, please contact
            our support team immediately.
          </p>
        </div>

        <p style="
          margin-top: 30px;
          color: #666;
        ">
          Thank you for joining us!
        </p>

        <p>
          Best regards,<br>
          <strong>Team</strong>
        </p>

      </div>
    </div>`;

  return html;
};

export const generateLoginDetectedHtml = (name: string) => {
  const html = `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 30px;
      background-color: #f8f9fa;
      color: #333;
    ">

      <div style="
        background-color: #ffffff;
        padding: 30px;
        border-radius: 10px;
      ">

        <h1 style="
          color: #2c3e50;
          margin-bottom: 20px;
        ">
          New Login Detected 🔐
        </h1>

        <p>
          Hello ${name},
        </p>

        <p>
          We detected a new login to your account.
        </p>

        <div style="
          margin: 25px 0;
          padding: 20px;
          background-color: #fff3cd;
          border-left: 4px solid #ffc107;
          border-radius: 5px;
        ">
          <strong>Was this you?</strong>

          <p style="margin-bottom: 0;">
            If you recently logged in, you can safely ignore this email.
          </p>
        </div>

        <p>
          If you do not recognize this login, we recommend that you
          change your password immediately to protect your account.
        </p>

        <p style="
          margin-top: 30px;
          color: #666;
        ">
          If you need help securing your account, please contact
          our support team.
        </p>

        <p>
          Stay safe,<br>
          <strong>Team</strong>
        </p>

      </div>
    </div>
  `;

  return html;
};

//forgot password send otp


//change email send otp
