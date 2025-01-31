'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Movies', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    release_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    director_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Directors',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })
}
export async function down(queryInterface) {
  await queryInterface.dropTable('Movies')
}
