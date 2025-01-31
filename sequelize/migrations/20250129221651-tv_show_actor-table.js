'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('TV_Show_Actor', {
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
    actor_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Actors',
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
  await queryInterface.dropTable('TV_Show_Actor')
}
