const _ = require ('../../services/virement/virement.service');
class VirementController {
    async create(req,res){ _.createNew(req,res)}
    async all(req,res){ _.findAll(req,res)}
    async byId(req,res){ _.findById(req,res)}
    async update(req,res){ _.updateExistant(req,res)}
    async delete(req,res){ _.delete(req,res)}

}
module.exports = new VirementController();