const router = require("express").Router();
const controller = require("../controller/fox_controller")

router.post("/post",controller.make_fox);

router.get("/all", controller.get_foxes);

module.exports = router