const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Like }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'bookId' });
    }
  }
  Book.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      author: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
