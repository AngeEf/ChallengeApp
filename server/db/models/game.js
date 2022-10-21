const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate() {
    }
  }
  Game.init({
    user_id: DataTypes.INTEGER,
    challenge_id: DataTypes.INTEGER,
    progress: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
