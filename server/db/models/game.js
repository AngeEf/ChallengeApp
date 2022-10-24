const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Game.init({
    user_id: DataTypes.INTEGER,
    challenge_id: DataTypes.INTEGER,
    progress: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
