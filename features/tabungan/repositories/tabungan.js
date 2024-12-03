const prisma = require("../../../configs/config");

class TabunganRepository {
  async createTransaction(data) {
    return prisma.tabungan.create({ data });
  }

  async getTotalSaldo() {
    const result = await prisma.tabungan.aggregate({
      _sum: {
        uang: true,
      },
    });
    return result._sum.uang || 0;
  }
}

module.exports = new TabunganRepository();
