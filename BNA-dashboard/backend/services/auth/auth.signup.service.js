const bcrypt = require("bcrypt");
const UserDTO = require("../../models/user/user.register.dto.js");
const User = require("../../models/user/user.schema.js");
const DEFAULT_VALUE = require("../../messages/DEFAULT_VALUES.json");
const SUCCESS_STATUS = require("../../messages/201.json");
const FAIL_STATUS = require("../../exceptions/500.json");

class SignupService {
  async signup(req, res) {
    try {
      const user_dto = new UserDTO(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.phone_number,
        req.body.password
      );
      const hashed_password = await bcrypt.hash(user_dto.password, 10);
      const user = new User({
        firstname: user_dto.firstname,
        lastname  : user_dto.lastname,
        email: user_dto.email,
        phone_number: user_dto.phone_number,
        password: hashed_password,
        account_status: DEFAULT_VALUE.default_account_status,
      });
      await user.save();
      res
        .status(201)
        .json({ message: SUCCESS_STATUS.register.successful_operation });
    } catch (error) {
      console.log("error"+error);
      res.status(500).json({ error: FAIL_STATUS.internal.server.error });
    }
  }
}
module.exports = new SignupService();
