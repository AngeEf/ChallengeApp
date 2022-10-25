/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [{
      user_id: 1,
      challenge_id: 3,
      // протыканый борд
      progress: '{"1":true, "2":true, "3":true, "4":true, "5":false, "6":false, "7":true, "8":false, "9":true, "10":false, "11":false, "12": false, "13":false, "14":false, "15":false, "16":false, "17":false, "18":false, "19":false, "20":false, "21":false, "22":false, "23":false, "24":false, "25":false, "26":false, "27":false, "28":false, "29":false, "30":false}',
    }, {
      user_id: 1,
      challenge_id: 2,
      progress: '{"1":true, "2":true, "3":true, "4":true, "5":false, "6":false, "7":true, "8":false, "9":true, "10":false, "11":false, "12": false, "13":false, "14":false, "15":false, "16":false, "17":false, "18":false, "19":false, "20":false, "21":false, "22":false, "23":false, "24":false, "25":false, "26":false, "27":false, "28":false, "29":false, "30":false}',
    }, {
      user_id: 2,
      challenge_id: 1,
      progress: '{"1":true, "2":true, "3":true, "4":true, "5":false, "6":false, "7":true, "8":true, "9":true, "10":false, "11":false, "12": false, "13":false, "14":false, "15":false, "16":false, "17":false, "18":false, "19":false, "20":false, "21":false, "22":false, "23":false, "24":false, "25":false, "26":false, "27":false, "28":false, "29":false, "30":false}',
    }, {
      user_id: 3,
      challenge_id: 4,
    }, {
      user_id: 1,
      challenge_id: 3,
    }, {
      user_id: 2,
      challenge_id: 4,
    },
    {
      user_id: 2,
      challenge_id: 5,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
