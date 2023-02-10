const express = require('express');
const router = express.Router();

router.get("/bikes", (req, res) => {});
router.get("/bikes/:id", (req, res) => {});
router.post("/bikes", (req, res) => {});
router.put("/bikes/:id", (req, res) => {});
router.delete("/bikes/:id", (req, res) => {});

router.get("/locations", (req, res) => {});
router.get("/locations/:id", (req, res) => {});
router.post("/locations", (req, res) => {});
router.put("/locations/:id", (req, res) => {});
router.delete("/locations/:id", (req, res) => {});

router.get("/reservations", (req, res) => {});
router.get("/reservations/:id", (req, res) => {});
router.post("/reservations", (req, res) => {});
router.put("/reservations/:id", (req, res) => {});
router.delete("/reservations/:id", (req, res) => {});

router.get("/checkout", (req, res) => {});
router.get("/checkout/:id", (req, res) => {});
router.post("/checkout", (req, res) => {});
router.put("/checkout/:id", (req, res) => {});
router.delete("/checkout/:id", (req, res) => {});

router.get("/return", (req, res) => {});
router.get("/return/:id", (req, res) => {});
router.post("/return", (req, res) => {});
router.put("/return/:id", (req, res) => {});
router.delete("/return/:id", (req, res) => {});

router.get("/reports", (req, res) => {});
router.get("/reports/:id", (req, res) => {});
router.post("/reports", (req, res) => {});
router.put("/reports/:id", (req, res) => {});
router.delete("/reports/:id", (req, res) => {});


module.exports = router;