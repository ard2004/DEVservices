const express = require("express")
const app = express()
const uploadHandle = require('../controller/uploadController')
const router = express.Router()
const { storeHandle } = require("../controller/uploadController.js")
router.post('/',storeHandle)
module.exports = router;

