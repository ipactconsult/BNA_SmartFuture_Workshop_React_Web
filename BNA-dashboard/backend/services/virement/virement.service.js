const VirementDTO = require("../../models/virement/virement.dto");
const Virement = require("../../models/virement/virement.model");

class VirementService {
  async findById(req, res) {
    try {
      const id = req?.params?.id;
      const data = await Virement.findById(id);
      return res.status(200).json(data);
    } catch (error) {
      throw new Error(
        "Erreur lors de la lecture du virement : " + error.message
      );
    }
  }
  async findAll(req, res) {
    try {
      const data = await Virement.find();
      return res.status(200).json(data);
    } catch (error) {
      throw new Error(
        "Erreur lors de la lecture du virement : " + error.message
      );
    }
  }
  async createNew(req, res) {
    try {
      const virement_dto = new VirementDTO(
        req.body.beneficiaire,
        req.body.montant,
        req.body.date,
        req.body.description
      );
      const virement = new Virement({
        beneficiaire: virement_dto.beneficiaire,
        montant: virement_dto.montant,
        date: virement_dto.date,
        description: virement_dto.description,
      });
      await virement.save();
      res.status(201).json({ message: "virement créé" });
    } catch (error) {
      console.log("error" + error);
      res.status(500).json({ error: "problème serveur" });
    }
  }
  async updateExistant(req, res) {
    try {
      const _id = req?.params?._id;
  
      if (!_id) {
        return res.status(401).json({ message: "not found id" });
      }
  
      const virement_dto = {
        beneficiaire: req.body.beneficiaire,
        montant: req.body.montant,
        date: req.body.date,
        description: req.body.description
      };
  
      const updated = await Virement.findByIdAndUpdate(
        _id,
        virement_dto,
        { new: true }
      );
  
      if (!updated) {
        return res.status(404).json({ message: "not found data" });
      }
  
      return res.status(200).json(updated);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour de la donnée." });
    }
  }

  async delete(req, res) {
    try {
      const _id = req?.params?._id;
      const data = await Virement.findByIdAndDelete(_id);
      if (!data) {
        return res.status(404).json({ message: "Virement non trouvé." });
      }
      return res.status(200).json(data);
    } catch (error) {
      throw new Error(
        "Erreur lors de la suppression du virement : " + error.message
      );
    }
  }
  
  
}
module.exports = new VirementService();
