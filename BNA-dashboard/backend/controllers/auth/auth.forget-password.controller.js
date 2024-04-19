const _ = require('../../services/auth/auth.forget-password.service');

class ForgetPasswordController{
    async forgetPassword(req,res){await _.findEmail(req,res)};
}
module.exports = new ForgetPasswordController();