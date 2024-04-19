const User = require("../../models/user/user.schema");
const UpdateUserDTO = require("../../models/user/user.update.dto");
const WARNING_STATUS = require("../../exceptions/404.json")
const ERROR_STATUS = require("../../exceptions/404.json")

class UserUpdateService {
  async updateUser(req, res) {
    try {
      const _id = req?.user?._id;

      if (!_id) {
        return res.status(401).json({ message: WARNING_STATUS.not_authenticated });
      }

      const user_dto = new UpdateUserDTO(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.phone_number,
      );

      const updated = await User.findByIdAndUpdate(
        _id,
        {
          firstname: user_dto.firstname,
          lastname: user_dto.lastname,
          email: user_dto.email,
          phone_number: user_dto.phone_number,
        },
        { new: true }
      );


      if (!updated) {
        return res.status(404).json({ message: WARNING_STATUS.user_notfound });
      }

      res.status(200).json({
        user: updated,
      });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur.' });
    }
  }
}

module.exports = new UserUpdateService();
