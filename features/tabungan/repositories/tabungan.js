const prisma = require("../../../configs/config");

class TabunganRepository {
  async createTransaction(data) {
    return prisma.tabungan.create({ data });
  }

  async getTotalUang() {
    const result = await prisma.tabungan.aggregate({
      _sum: {
        uang: true,
      },
    });
    return result._sum.uang || 0;
  }

  async getAllHistory() {
    return prisma.tabungan.findMany({
      orderBy: { waktu: "desc" },
    });
  }

  async getHistoryByType(type) {
    return prisma.tabungan.findMany({
      where: { type },
      orderBy: { waktu: "desc" },
    });
  }

  async deleteAllRecords() {
    return prisma.tabungan.deleteMany({});
  }

  async getTotalSaldo() {
    const result = await prisma.tabungan.aggregate({
      _sum: { saldo: true },
    });
    return result._sum.saldo || 0;
  }
}

module.exports = new TabunganRepository();
