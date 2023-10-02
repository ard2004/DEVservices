const express = require("express")
const app = express()
const router = express.Router()
const { storeHandle } = require("../controller/uploadController.js")
router.route('/upload').post(storeHandle)
module.exports = router;

