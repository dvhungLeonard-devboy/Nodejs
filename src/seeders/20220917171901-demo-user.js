'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        email: 'xxx@gmail.com',
        password: 'xxx',
        firstName: 'XXX',
        lastName: 'xxx',
        address: 'Japan',
        gender: 'female',
        phoneNumber: '0123456789',
        roleid: 'x1x2x3x4',
        positionid: 'xxxmmm',
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'xxx123@gmail.com',
        password: 'xxx123',
        firstName: 'XXX123',
        lastName: 'xxx123',
        address: 'Japan',
        gender: 'male',
        phoneNumber: '0987654321',
        roleid: 'xlxlxl',
        positionid: 'xxxlll',
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
