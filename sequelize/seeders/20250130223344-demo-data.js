'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert('Users', [
    {
      name: 'Lucas',
      email: 'lucas@gmail.com',
      password: '$2b$10$uylmKgi8YpHneKvn4f9PMO.Df1j47EBBbDABVb1fbrDEb/0/MSnhO', // pass1234
      created_at: new Date(),
      updated_at: new Date()
    }
  ])

  await queryInterface.bulkInsert('Directors', [
    {
      name: 'José Martínez',
      birthdate: '1975-05-12 20:25:30',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])

  await queryInterface.bulkInsert('Movies', [
    {
      title: 'Titanic',
      release_date: '1997-12-19 00:00:00',
      director_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Inception',
      release_date: '2010-07-16 00:00:00',
      director_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])

  await queryInterface.bulkInsert('TV_Shows', [
    {
      title: 'Bendita',
      release_date: '2023-08-15 00:00:00',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Stranger Things',
      release_date: '2016-07-15 00:00:00',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])

  await queryInterface.bulkInsert('Seasons', [
    {
      number: 1,
      tv_show_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      number: 1,
      tv_show_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])

  await queryInterface.bulkInsert('Episodes', [
    {
      title: 'Episode 1 - Bendita',
      season_id: 1,
      director_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Chapter One: The Vanishing of Will Byers',
      season_id: 2,
      director_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete('Users', null, {})
  await queryInterface.bulkDelete('Directos', null, {})
  await queryInterface.bulkDelete('Movies', null, {})
  await queryInterface.bulkDelete('TV_Shows', null, {})
  await queryInterface.bulkDelete('Seasons', null, {})
  await queryInterface.bulkDelete('Episodes', null, {})
}
