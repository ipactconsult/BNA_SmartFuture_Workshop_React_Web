const _ = require ('../../services/user/user.updateinfo.service');
class UpdateUserController {
    async updateInfo(req,res){await _.updateUser(req,res);}
}
module.exports = new UpdateUserController();