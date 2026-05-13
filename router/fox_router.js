const router = require("express").Router();
const controller = require("../controller/fox_controller")

//All the routes for getting statistics, updating fox votes and post route which creates a fox.
router.post("/post",controller.make_fox);

router.get("/all", controller.get_foxes);

router.put("/put", controller.update_vote_fox)

router.get("/statistics", controller.get_fox_statistics)

module.exports = router