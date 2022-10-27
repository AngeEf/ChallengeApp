/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Challenges', [{
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'Marafon',
      subtitle: 'Sport-Marafon Challenge',
      category: 'sport',
      description: 'Проведите эффективный тренировочный месяц, получите удовольствие от бега, пробежав как можно больше километров',
    },
    {
      image: '/images/1666788683134--e09b40177d86f2a41c47c4cef2082153.png',
      title: '100 дней бега',
      subtitle: 'Челлендж: 100 дней ежедневного бега',
      category: 'sport',
      description: 'Наш коллега дал обещание о том, что будет бегать 100 дней подряд, а если пропустит любую тренировку, то заплатит 5000 рублей первому, кто это заметит',
    },
    {
      image: 'https://megamag.tj/images/thumbs/0006468_dl-muin_300.jpeg',
      title: 'ChalengeTitle',
      subtitle: 'Sport-Marafon Strava Challenge',
      category: 'sport',
      description: 'Проведите эффективный тренировочный месяц, заработайте ценные призы и получите удовольствие от бега, пробежав как можно больше километров с 22 ноября по 22 декабря!',
    },
    {
      image: 'images/1666788683134--e09b40177d86f2a41c47c4cef2082153.png',
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
