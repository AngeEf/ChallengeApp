/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [{
      user_id: 1,
      challenge_id: 3,
    }, {
      user_id: 1,
      challenge_id: 2,
    }, {
      user_id: 2,
      challenge_id: 1,
    }, {
      user_id: 3,
      challenge_id: 4,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
