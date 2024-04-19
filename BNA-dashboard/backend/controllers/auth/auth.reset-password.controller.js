const _ = require('../../services/auth/auth.reset-password.service');

class ResetPasswordController{
    async verifyCode(req,res){await _.verifyCode(req,res)};
    async resetPassword(req,res){await _.resetPassword(req,res)};
}
module.exports = new ResetPasswordController();