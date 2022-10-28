/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [{
      user_id: 2,
      community_id: 1,
    }, {
      user_id: 3,
      community_id: 1,
    }, {
      user_id: 4,
      community_id: 1,
    }, {
      user_id: 5,
      community_id: 1,
    },
    {
      user_id: 6,
      community_id: 1,
    },
    {
      user_id: 7,
      community_id: 1,
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {});
  },
};
