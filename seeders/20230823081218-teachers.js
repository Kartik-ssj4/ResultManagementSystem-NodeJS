'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt=require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const password=await bcrypt.hash("12345678",10)
   await queryInterface.bulkInsert('teachers',[{
    firstName: 'Teacher',
    lastName: 'Admin',
    email: 'adminTeacher@gmail.com',
    password: password,
    createdAt:  new Date(),
    updatedAt: new Date()


   }],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
