const bcrypt = require("bcrypt");
const ResetToken = require("../../models/reset-token/reset-token.schema");
const User = require("../../models/user/user.schema");
const WARNING_STATUS = require("../../exceptions/404.json");
const SUCCESS_STATUS = require("../../messages/201.json");
const FAIL_STATUS = require("../../exceptions/500.json");

class ResetPasswordService {
  async verifyCode(req, res) {
    try {
      const { email, code } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: WARNING_STATUS.invalid_user });
      }

      const resetToken = await ResetToken.findOne({ userId: user._id, code });

      if (!resetToken) {
        return res.status(404).json({ message: WARNING_STATUS.invalid_code });
      }

      res.status(200).json({ message: SUCCESS_STATUS['reset-password'].successful_operation });
    } catch (error) {
      console.error('error', error);
      res.status(500).json({
        message: FAIL_STATUS.internal.server.error,
      });
    }
  }
  async resetPassword(req, res) {
    try {
      const { code } = req.params;
      const resetCode = await ResetToken.findOne({ code });

      if (!resetCode) {
        return res
          .status(404)
          .json({ message: WARNING_STATUS.invalid_token });
      }

      const user = await User.findById(resetCode.userId);

      if (!user) {
        return res
          .status(404)
          .json({ message: WARNING_STATUS.invalid_user_token });
      }

      const { newPassword } = req.body;
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();

      // Vérifier si resetToken existe avant d'appeler remove()
      if (resetCode) {
        await resetCode.remove();
      }

      res
        .status(200)
        .json({ message: SUCCESS_STATUS["reset-password"].successful_operation });
    } catch (error) {
      console.error("error", error);
      res.status(500).json({
        message: FAIL_STATUS.internal.server.error,
      });
    }
  }
}

module.exports = new ResetPasswordService();
