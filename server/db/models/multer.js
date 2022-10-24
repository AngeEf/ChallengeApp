const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Multer extends Model {
    static associate(models) {
    }
  }
  Multer.init({
    name: DataTypes.STRING,
    path: DataTypes.TEXT,
    pic: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    community_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Multer',
  });
  return Multer;
};
