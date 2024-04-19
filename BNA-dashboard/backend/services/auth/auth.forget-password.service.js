const User = require("../../models/user/user.schema");
const WARNING_STATUS = require("../../exceptions/404.json");
const SUCCESS_STATUS = require("../../messages/201.json");
const FAIL_STATUS = require("../../exceptions/500.json");
const ejs = require("ejs");
const fs = require("fs");
const path = require('path');
const ResetToken = require("../../models/reset-token/reset-token.schema");
const nodemailer = require("nodemailer");
class ForgetPasswordService {
  async findEmail(req, res) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: WARNING_STATUS.user_notfound });
      }
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      //const token = crypto.randomBytes(32).toString("hex");
      const reset_token = new ResetToken({ userId: user._id, code });
      // const reset_link = process.env.RESET_URL + code;
      await reset_token.save();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const emailTemplatePath = path.resolve(__dirname, "../../template/EmailTemplate.html");
      const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');
      const htmlContent = ejs.render(emailTemplate, { code });
      await transporter.sendMail({
        to: user.email,
        subject: "Réinitialisation de mot passe",
        from : "ifat.tunisie@gmail.com",
        text: "Réinitialisation de mot  passe",
        html: htmlContent,
      });
      res
        .status(200)
        .json({ message: SUCCESS_STATUS["forget-email"].successful_operation });
    } catch (error) {
      console.log("error" + error);
      res.status(500).json({
        message: FAIL_STATUS.internal.server.error,
      });
    }
  }
}

module.exports = new ForgetPasswordService();
