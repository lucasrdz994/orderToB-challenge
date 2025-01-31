'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Seasons', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    tv_show_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'TV_Shows',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
  await queryInterface.dropTable('Seasons')
}
