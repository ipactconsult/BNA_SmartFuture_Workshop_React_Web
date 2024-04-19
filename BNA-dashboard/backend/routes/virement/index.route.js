const router = require("express").Router();
const _route = require("../../controllers/virement/virement.controller");
const authenticateToken = require("../../middleware/auth.middleware");
router.post("/virement/create" , _route.create);
router.get("/virement/all" , _route.all);
router.put("/virement/update/:_id" , _route.update);
router.get("/virement/get/:id" , _route.byId);
router.delete("/virement/delete/:_id" , _route.delete);

module.exports = router;