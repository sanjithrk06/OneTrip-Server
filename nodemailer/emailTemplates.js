export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, hsl(26, 93%, 50%), hsl(26, 93%, 45%)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: hsl(26, 93%, 50%);">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>One Trip Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, hsl(26, 93%, 50%), hsl(26, 93%, 45%)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>One Trip Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, hsl(26, 93%, 50%), hsl(26, 93%, 45%)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background: linear-gradient(to right, hsl(26, 93%, 50%), hsl(26, 93%, 45%)); color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>One Trip Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Thanks For Registration</title>
          <style type="text/css">
            body {
              margin: 0;
              background-color: #cccccc;
              font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
            table {
              border-spacing: 0;
            }
            td {
              padding: 0;
            }
            img {
              border: 0;
            }
            .wrapper {
              width: 100%;
              table-layout: fixed;
              background-color: #cccccc;
            }
            .main {
              width: 100%;
              max-width: 600px;
              background-color: #ffffff;
              margin: 0 auto;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p {
              color: #000000;
            }
            .danger {
              color: #c00e0e;
            }
            a {
              text-decoration: none;
            }
            .footer a {
              margin: 0px 8px;
            }
          </style>
        </head>
        <body>
          <center class="wrapper">
            <table class="main" width="100%">
              <!-- top line -->
              <tr>
                <td height="10px" style="background-color: #319b31"></td>
              </tr>
              <!-- image  -->
              <tr>
                <td>
                  <img
                    src="https://res.cloudinary.com/dvfbca8ej/image/upload/v1673353155/prayukti/staticAssets/email_header_g3zomm.jpg"
                    alt="Hero Image"
                    width="100%"
                  />
                </td>
              </tr>
              <!-- Greatings  -->
              <tr>
                <td style="padding-left: 2rem; padding-right: 2rem">
                  <h4>Hello sanjith,</h4>
                  <h6 style="font-size: 12px">
                    Greetings from BIT V-PRAYUKTI'23 Organizing Team.
                  </h6>
                  <h6 style="font-size: 12px;font-weight: 400;">
                    Thanks for registering <b>'Paper Presentation'</b> at <b>BIT V-PRAYUKTI'23.🤝</b>
                  </h6>
                </td>
              </tr>
              <!-- Team id  -->
              <tr>
                <td>
                  <center>
                    <h3>Ticket ID : T001</h3>
                  </center>
                </td>
              </tr>
              <!-- Instructions  -->
              <tr>
                <td style="padding-left: 2rem; padding-right: 2rem">
                  <h6 style="font-size: 14px;font-weight: 400;">
                    Here's some important information about the event
                  </h6>
                  <h6
                    style="
                      font-size: 12px;
                      line-height: 18px;
                      word-spacing: 8px;
                      text-align: justify;
                      font-weight: 400;
                    "
                  >
                    BIT V-PRAYUKTI'23 is a National Level Event organised by the special labs in association with the department of Electronics and Communication Engineering at Bannari Amman Institute of Technology, Sathyamangalam. Since you have registered for this event, Your Registration is under review. Once your registration is confirmed, A registration ticket will be sent to you through Whatsapp shortly. Participants are requested to bring the generated tickets along with them during the event.
                  </h6>
                </td>
              </tr>
              <!-- Get more tickets  -->
              <tr>
                <td style="padding: 1rem 0">
                  <center>
                    <a
                      style="
                        text-decoration: none;
                        text-transform: uppercase;
                        font-weight: 500;
                        padding: 14px 1rem;
                        background-color: #319b31;
                        color: white;
                        border-radius: 8px;
                      "
                      href="https://bitvprayukti.bitsathy.ac.in/tickets"
                      >Get more Tickets</a
                    >
                  </center>
                </td>
              </tr>
              <!-- queries  -->
              <tr>
                <td style="padding-left: 2rem; padding-right: 2rem">
                  <h6 style="font-size: 12px;font-weight: 400;">
                    <b>For any Queries:</b> <br />
                    Please mail us at: <a href="mailto:bitvprayukti@bitsathy.ac.in">bitvprayukti@bitsathy.ac.in</a>
                  </h6>
                  <h6
                    style="
                      font-size: 12px;
                      line-height: 18px;
                      word-spacing: 8px;
                      text-align: justify;
                    "
                  >
                    Thanks & Regards, <br />
                    BIT V-PRAYUKTI'23, <br />
                    Organizing Team, <br />
                    Bannari Amman Institute of Technology, <br />
                    Sathyamangalam - 638401 <br />
                    Ph: 6382901171
                  </h6>
                  <h6
                    style="
                      font-size: 12px;
                      line-height: 18px;
                      word-spacing: 8px;
                      text-align: justify;
                    "
                  >
                    <i><span class="danger">DISCLAIMER</span>: Dear Candidate, You are
                    receiving this email because you have registered your E-mail ID
                    with Bannari Amman Institute of Technology (BIT V-PRAYUKTI'23).</i>
                  </h6>
                </td>
              </tr>
              <!-- Footer  -->
              <tr class="footer" style="background-color: #000000">
                <td style="margin: 0px auto; padding: 1rem">
                  <center>
                    <a href="https://wa.me/+916382901171">
                      <img
                        src="https://res.cloudinary.com/dvfbca8ej/image/upload/v1673411155/prayukti/staticAssets/whatsapp_bakmpo.png"
                        width="40px"
                        height="40px"
                        alt="whatsapp"
                      />
                    </a>
                    <a href="https://www.instagram.com/vprayuktibit/">
                      <img
                        src="https://res.cloudinary.com/dvfbca8ej/image/upload/v1673411156/prayukti/staticAssets/instagram_pzk4hc.png"
                        width="40px"
                        height="40px"
                        alt="instagram"
                      />
                    </a>
                  </center>
                  <center>
                    <h6 style="font-size: 12px; color: #fff">
                      Copyright © 2023 , All rights reserved.
                    </h6>
                    <h6 style="font-size: 12px; color: #fff">
                      Our mailing address is: <br />
                      <a href="mailto:bitvprayukti@bitsathy.ac.in"
                        >bitvprayukti@bitsathy.ac.in</a
                      >
                    </h6>
                  </center>
                </td>
              </tr>
            </table>
          </center>
        </body>
      </html>`;
