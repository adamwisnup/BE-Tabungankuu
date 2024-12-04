const express = require("express");
const router = express.Router();
const TabunganController = require("../features/tabungan/controllers/tabungan");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/deposit", TabunganController.deposit);
router.post("/withdraw", TabunganController.withdraw);
router.post("/withdraw-all", TabunganController.withdrawAll);

router.get("/history", TabunganController.getAllHistory);
router.get("/history/:type", TabunganController.getHistoryByType);

module.exports = router;
