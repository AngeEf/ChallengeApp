const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Community,
      Post,
      Comment,
      Challenge,
    }) {
      this.belongsToMany(Community, { through: 'Members', foreignKey: 'user_id' });
      this.belongsToMany(Challenge, { through: 'Game', foreignKey: 'user_id' });
      this.hasMany(Post, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Community, { foreignKey: 'admin_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
