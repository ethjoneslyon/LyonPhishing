const nodemailer = require('nodemailer');

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const SMTP = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'action.needed.alert.us.2026@gmail.com',
    pass: 'mloy vgcc bigk quwp',
  },
};

const AWARENESS_PAGE = 'https://ethjoneslyon.github.io/LyonPhishing';

const RECIPIENTS = [
  { name: 'Jes Solomon',    email: 'jes@lyonquality.com' },
  { name: 'Stacia Sexton',  email: 'stacia@lyonquality.com' },
  { name: 'Shaelyn Reno',   email: 'shaelyn@lyonquality.com' },
  { name: 'Ethan Jones',    email: 'ethan@lyonquality.com' },
];

// ─── SEND EMAILS ─────────────────────────────────────────────────────────────

async function run() {
  const transporter = nodemailer.createTransport(SMTP);

  for (const recipient of RECIPIENTS) {
    await transporter.sendMail({
      from: '"Google Security" <action.needed.alert.us.2026@gmail.com>',
      to: `"${recipient.name}" <${recipient.email}>`,
      subject: 'Security alert: new sign-in to your Google Account',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" style="margin:30px 0 20px;height:30px;">
          <h2 style="font-weight:normal;font-size:20px;color:#202124;">A new sign-in to your Google Account</h2>
          <p style="color:#3c4043;">Hi ${recipient.name},</p>
          <p style="color:#3c4043;">Your Google Account was just signed in to from a new Windows device. If this was you, you can ignore this email.</p>
          <p style="color:#3c4043;"><strong>If you didn't sign in recently, your account may be compromised. Review your account activity immediately.</strong></p>
          <p style="margin:28px 0;">
            <a href="${AWARENESS_PAGE}"
               style="background:#1a73e8;color:#fff;padding:10px 24px;text-decoration:none;border-radius:4px;font-size:14px;">
              Review activity
            </a>
          </p>
          <p style="color:#3c4043;font-size:13px;">You can also see security activity at myaccount.google.com</p>
          <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0;">
          <p style="color:#5f6368;font-size:12px;">Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
        </div>
      `,
    });

    console.log(`[SENT] ${recipient.name} <${recipient.email}>`);
  }

  console.log('\nAll emails sent.');
}

run();
