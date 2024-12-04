const TabunganService = require("../services/tabungan");

class TabunganController {
  async deposit(req, res) {
    try {
      const { amount } = req.body;
      if (!amount)
        return res.status(400).json({
          status: false,
          message: "Jumlah deposit harus diberikan",
          data: null,
        });

      const result = await TabunganService.deposit(amount);
      res.status(201).json({
        status: true,
        message: "Deposit berhasil",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  }

  async withdraw(req, res) {
    try {
      const { amount } = req.body;
      if (!amount)
        return res.status(400).json({
          status: false,
          message: "Jumlah penarikan harus diberikan",
          data: null,
        });

      const result = await TabunganService.withdraw(amount);
      res.status(201).json({
        status: true,
        message: "Penarikan berhasil",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  }

  async getAllHistory(req, res) {
    const histories = await TabunganService.getAllHistory();

    res.status(200).json({
      status: true,
      message: "Berhasil mengambil semua riwayat transaksi",
      data: histories,
    });
  }
  catch(error) {
    res.status(400).json({
      status: false,
      message: error.message,
      data: null,
    });
  }

  async getHistoryByType(req, res) {
    try {
      const { type } = req.params;
      const histories = await TabunganService.getHistoryByType(type);
      res.status(200).json({
        status: true,
        message: `Berhasil mengambil riwayat transaksi ${type}`,
        data: histories,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  }

  async withdrawAll(req, res) {
    try {
      const result = await TabunganService.withdrawAll();
      res.status(201).json({
        status: true,
        message: "Withdrawal berhasil",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  }
}

module.exports = new TabunganController();
