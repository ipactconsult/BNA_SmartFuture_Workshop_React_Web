const _ = require("../../services/auth/auth.signup.service");

class SignupController {
  async register(req, res) {_.signup(req,res);}
}
module.exports = new SignupController();
