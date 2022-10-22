/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Challenges', [{
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'sport',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'sport',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'sport',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'healty',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'healty',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'https://s5o.ru/storage/simple/ru/ugc/83/38/25/44/ruu040933cbd5.97.400x300.jpg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'food',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'food',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'https://s5o.ru/storage/simple/ru/ugc/83/38/25/44/ruu040933cbd5.97.400x300.jpg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'food',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Challenges', null, {});
  },
};
