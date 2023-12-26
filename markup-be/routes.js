let router = require("express").Router();
let markUpController = require('./views/markup.view');

router
  .route("/markup")
  .post(markUpController.post)

module.exports = router;