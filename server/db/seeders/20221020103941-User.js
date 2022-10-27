/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Сергей',
      email: '1@1',
      password: '123',
      image: 'images/ava1.jpeg',
    },
    {
      name: 'Вадим',
      email: '2@2',
      password: '123',
      image: 'images/ava9.jpeg',
    },
    {
      name: 'Никита',
      email: '3@3',
      password: '123',
      image: 'images/ava2.jpeg',
    },
    {
      name: 'Саша',
      email: '4@4',
      password: '123',
      image: 'images/ava3.jpeg',
    },
    {
      name: 'Анна',
      email: '5@5',
      password: '123',
      image: 'images/ava8.jpeg',
    },
    {
      name: 'Петр',
      email: '6@6',
      password: '123',
      image: 'images/ava4.jpeg',
    },
    {
      name: 'Макс',
      email: '7@7',
      password: '123',
      image: 'images/ava7.jpeg',
    },
    {
      name: 'Денис',
      email: '8@8',
      password: '123',
      image: 'images/ava5.jpeg',
    },
    {
      name: 'Адам',
      email: '9@9',
      password: '123',
      image: 'images/ava6.jpeg',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
