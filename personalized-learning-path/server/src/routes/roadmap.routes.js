const express = require("express");
const router = express.Router();
const { getRoadmap } = require("../controllers/roadmap.controller");

router.get("/", getRoadmap);

module.exports = router;
