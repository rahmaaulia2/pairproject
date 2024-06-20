'use strict';

const { sequelize } = require('../../Day 16 Week 4/fsjs-p1-v3-slc3-rahmaaulia2/models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("UserCourses", "UserId", {
        type : Sequelize.INTEGER,
        references : {
          model : "Users",
          key : "id"
      }})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("UserCourses", "UserId")
  }
};
