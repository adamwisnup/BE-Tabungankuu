const TabunganRepository = require("../repositories/tabungan");

class TabunganService {
  async deposit(amount) {
    if (amount <= 0) {
      throw new Error("Jumlah deposit harus lebih besar dari 0");
    }

    const currentSaldo = await TabunganRepository.getTotalUang();
    const newSaldo = currentSaldo + amount;

    return TabunganRepository.createTransaction({
      uang: amount,
      type: "deposit",
      saldo: newSaldo,
    });
  }

  async withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Jumlah penarikan harus lebih besar dari 0");
    }

    const currentSaldo = await TabunganRepository.getTotalUang();
    if (currentSaldo < amount) {
      throw new Error("Saldo tidak mencukupi untuk penarikan");
    }

    const newSaldo = currentSaldo - amount;

    return TabunganRepository.createTransaction({
      uang: -amount,
      type: "withdrawal",
      saldo: newSaldo,
    });
  }

  async getAllHistory() {
    return TabunganRepository.getAllHistory();
  }

  async getHistoryByType(type) {
    if (type !== "deposit" && type !== "withdrawal") {
      throw new Error("Tipe transaksi tidak valid");
    }
    return TabunganRepository.getHistoryByType(type);
  }

  async withdrawAll() {
    const totalSaldo = await TabunganRepository.getTotalSaldo();

    if (totalSaldo === 0) {
      throw new Error("Saldo sudah kosong, tidak dapat melakukan withdrawal.");
    }

    const withdrawalTransaction = await TabunganRepository.deleteAllRecords();

    return totalSaldo;
  }
}

module.exports = new TabunganService();
