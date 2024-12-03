const TabunganRepository = require("../repositories/tabungan");

class TabunganService {
  async deposit(amount) {
    if (amount <= 0) {
      throw new Error("Jumlah deposit harus lebih besar dari 0");
    }

    const currentSaldo = await TabunganRepository.getTotalSaldo();
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

    const currentSaldo = await TabunganRepository.getTotalSaldo();
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
}

module.exports = new TabunganService();
