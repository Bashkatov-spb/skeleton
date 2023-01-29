/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const likesData = [
      {
        userId: 1,
        bookId: 1,
      },
      {
        userId: 2,
        bookId: 2,
      },
      {
        userId: 3,
        bookId: 3,
      },
    ];
    const likes = likesData.map((like) => ({
      ...like,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    queryInterface.bulkInsert('Likes', likes);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Likes');
  },
};
