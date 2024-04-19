const _ = require("../../services/auth/auth.signin.service");

class SigninController {
  async login(req, res) {_.login(req,res);}
}
module.exports = new SigninController();
