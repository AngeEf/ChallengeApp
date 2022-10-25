const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    static associate({ Game }) {
      this.hasMany(Game, { foreignKey: 'challenge_id' });
    }
  }
  Challenge.init({
    image: DataTypes.TEXT,
    title: DataTypes.STRING,
    subtitle: DataTypes.TEXT,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Challenge',
  });
  return Challenge;
};
