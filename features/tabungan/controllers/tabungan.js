const TabunganService = require("../services/tabungan");

class TabunganController {
  async deposit(req, res) {
    try {
      const { amount } = req.body;
      if (!amount)
        return res
          .status(400)
          .json({ message: "Jumlah deposit harus diberikan" });

      const result = await TabunganService.deposit(amount);
      res.status(201).json({
        message: "Deposit berhasil",
        data: result,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async withdraw(req, res) {
    try {
      const { amount } = req.body;
      if (!amount)
        return res
          .status(400)
          .json({ message: "Jumlah penarikan harus diberikan" });

      const result = await TabunganService.withdraw(amount);
      res.status(201).json({
        message: "Penarikan berhasil",
        data: result,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new TabunganController();
