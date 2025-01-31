'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Movie_Actor', {
    movie_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Movies',
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
  await queryInterface.dropTable('Movie_Actor')
}
