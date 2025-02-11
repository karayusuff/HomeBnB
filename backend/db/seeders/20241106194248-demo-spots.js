'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: '456 Silicon Valley Blvd',
        city: 'Mountain View',
        state: 'California',
        country: 'United States of America',
        lat: 37.419200,
        lng: -122.057400,
        name: 'Modern Silicon Valley Apartment',
        description: 'Stylish one-bedroom apartment in the heart of Silicon Valley. Perfect for tech professionals and travelers visiting the Bay Area.',
        price: 200,
        previewImage: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        ownerId: 2,
        address: '789 Elm Street',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States of America',
        lat: 34.052235,
        lng: -118.243683,
        name: 'Charming Hollywood Loft',
        description: 'Cozy loft in the vibrant heart of Hollywood. Walking distance to famous landmarks like the Walk of Fame and the Hollywood Sign.',
        price: 150,
        previewImage: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        ownerId: 3,
        address: '101 Tech Way',
        city: 'Austin',
        state: 'Texas',
        country: 'United States of America',
        lat: 30.267153,
        lng: -97.7430608,
        name: 'Contemporary Austin Loft',
        description: 'Bright, airy loft located in downtown Austin, ideal for exploring the city’s lively cultural scene, including live music, restaurants, and festivals.',
        price: 180,
        previewImage: 'https://images.pexels.com/photos/8186519/pexels-photo-8186519.jpeg'
      },
      {
        ownerId: 4,
        address: '321 Apple Park Drive',
        city: 'Cupertino',
        state: 'California',
        country: 'United States of America',
        lat: 37.334922,
        lng: -122.009033,
        name: 'Luxury Cupertino Retreat',
        description: 'A stunning, modern house in Cupertino, perfect for families or business travelers. Close to Apple Park and other tech hubs.',
        price: 250,
        previewImage: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        ownerId: 5,
        address: '123 Disney Lane',
        city: 'San Francisco',
        state: 'California',
        country: 'United States of America',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'Cozy San Francisco Apartment',
        description: 'Bright and inviting apartment in a prime San Francisco location, just a short ride from Fisherman’s Wharf, Golden Gate Park, and more.',
        price: 123,
        previewImage: 'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { 
        [Op.in]: [
          'Modern Silicon Valley Apartment',
          'Charming Hollywood Loft',
          'Contemporary Austin Loft',
          'Luxury Cupertino Retreat',
          'Cozy San Francisco Apartment'
        ]
      }
    }, {});
  }
};
