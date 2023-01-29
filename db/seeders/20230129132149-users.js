const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Jopa',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Gennadiy',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Lena',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Siski',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Ovca',
        password: await bcrypt.hash('123456', 10),
      },
    ];

    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
