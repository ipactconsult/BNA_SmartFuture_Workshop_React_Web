const _ = require ('../../services/user/user.getinfo.service');
class UserInfoController {
    async getInfo(req,res){await _.getUser(req,res);}
}
module.exports = new UserInfoController();