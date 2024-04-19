const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserLoginDTO = require("../../models/user/user.login.dto.js");
const User = require("../../models/user/user.schema.js");
const SUCCESS_STATUS = require("../../messages/201.json");
const FAIL_STATUS = require("../../exceptions/500.json");
const WARNING_STATUS = require("../../exceptions/404.json");

class SigninService {
  async login(req, res) {
    try {
      const login_dto = new UserLoginDTO(req?.body?.email, req?.body?.password);
      const user = await User.findOne({ email: login_dto?.email });
      if (!user) {



        
        return res
          .status(401)
          .json({
            error: WARNING_STATUS.invalid_credentials.warning_operation,
          });
      }
      const password_match = await bcrypt.compare(
        login_dto.password,
        user.password
      );
      if (!password_match) {
        return res
          .status(401)
          .json({
            error: WARNING_STATUS.invalid_credentials.warning_operation,
          });
      }
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res
        .status(200)
        .json({
          token: token,         
          message: SUCCESS_STATUS.login.successful_operation,
        });
    } catch (error) {
      res.status(500).json({ error: FAIL_STATUS.internal.server.error });
    }
  }
}
module.exports = new SigninService();
