const express = require("express")

const healthCheckController = require("../controllers/healthCheckController")
const postsController = require("../controllers/postsController")

const router = express.Router()
const jsonParser = express.json()

router.route("/healthcheck").get(healthCheckController.healthCheck)
router.route("/posts").get(postsController.getPosts)
module.exports = router
