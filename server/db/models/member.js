const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate() {
    }
  }
  Member.init({
    community_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};
