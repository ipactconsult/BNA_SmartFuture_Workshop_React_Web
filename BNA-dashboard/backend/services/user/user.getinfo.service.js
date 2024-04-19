class UserInfoService {
  async getUser(req, res) {
     res.status(201).json({
        _id : req.user._id,
        firstname : req.user.firstname,
        lastname : req.user.lastname,
        email : req.user.email,
        phone_number : req.user.phone_number,
        CIN : req.user.CIN,
        account_status : req.user.account_status
     })
  }
}
module.exports = new UserInfoService();
