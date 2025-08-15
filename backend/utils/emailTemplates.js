export const otpEmailTemplate = (fullname, otp) => {
    return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="text-align: center; color: #0BAFA6;">My Therapy Space</h2>
            <p>Hi <strong>${fullname}</strong>,</p>
            <p>Welcome to <a href="https://mytherapyspace.com.au" style="color: #0BAFA6; text-decoration: none;">My Therapy Space</a>! We're excited to have you on board.</p>
            <p>Your One-Time Password (OTP) to verify your account is:</p>
            <div style="text-align: center; margin: 20px 0;">
                <span style="display: inline-block; background: #0BAFA6; color: white; font-size: 24px; padding: 10px 20px; border-radius: 5px; letter-spacing: 4px;">
                    ${otp}
                </span>
            </div>
            <p>This OTP is valid for <strong>2 minutes</strong>. Please do not share it with anyone.</p>
            <p>Thank you,<br>
            The My Therapy Space Team</p>
            <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;">
            <small style="display: block; text-align: center; color: #777;">If you did not request this, please ignore this email.</small>
        </div>
    </div>
    `;
};

export const adminApprovalEmailTemplate = (fullname) => {
    return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="text-align: center; color: #0BAFA6;">My Therapy Space</h2>
            <p>Hi <strong>${fullname}</strong>,</p>
            <p>Good news! Your admin account has been <strong>approved</strong> by our Super Admin.</p>
            <p>You can now log in and start using your account:</p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="https://mytherapyspace.com.au" 
                   style="display: inline-block; background: #0BAFA6; color: white; font-size: 18px; padding: 12px 24px; border-radius: 5px; text-decoration: none;">
                    Go to Login
                </a>
            </div>
            <p>If you face any issues, feel free to contact our support team.</p>
            <p>Thank you,<br>
            The My Therapy Space Team</p>
            <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;">
            <small style="display: block; text-align: center; color: #777;">
                If you did not request this approval, please contact support immediately.
            </small>
        </div>
    </div>
    `;
};
