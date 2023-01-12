const express = require("express");

const router = express.Router();

const wilderControllers = require("./controllers/wilderControllers");

// Gestion des wilders
router.get("/api/wilders", wilderControllers.browse);
router.get("/api/wilders/:id", wilderControllers.read);
router.put("/api/wilders/:id", wilderControllers.edit);
router.post("/api/wilders/", wilderControllers.add);
router.delete("/api/wilders/:id", wilderControllers.destroy);

module.exports = router;
