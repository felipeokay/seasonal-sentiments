const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');


  const categories = await Category.insertMany([
    { name: 'Traditional' },
    { name: 'Funny' },
    { name: 'Jokes' },
    { name: 'Dark Humor' },
    { name: 'Most Popular' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Happy Holidays',
      description:
        'A festive winter scene that defies the laws of physics',
      image: 'Happy_Holidays.png',
      category: [categories[0]._id, categories[4]._id],
      price: .99,
      quantity: 500,
    },
    {
      name: 'Happy Kwanzaa',
      description:
        'A festive kwanzaa scene',
      image: 'Happy_Kwanzaa.png',
      category: categories[0]._id,
      price: .99,
      quantity: 500,
    },
    {
      name: 'Laughter and Cheer',
      description:
        'A happy holiday family scene',
      image: 'laughter and cheer.png',
      category: categories[0]._id,
      price: .99,
      quantity: 500,
    },
    {
      name: 'Magical Christmas',
      category: categories[0]._id,
      description:
        'A festive house during the holidays',
      image: 'magical christmas.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Merry Christmas and a Happy New Year!',
      category: categories[0]._id,
      description:
        'Lovely place for the tree',
      image: 'Merry Christmas, happy new year.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Happy Christmahanukwanzakah',
      category: categories[1]._id,
      description:
        'A celebration of all three religious holidays',
      image: 'Happy_Christmahanukwanzakah_1.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Merry Stressmas',
      category: [categories[1]._id, categories[4]._id],
      description:
        'A stressed out elf',
      image: 'Merry_Stressmas.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Seasons Greetings Colleagues',
      category: categories[1]._id,
      description:
        'Workplace holiday humor',
      image: 'Seasons_Greetings_IIC.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Sorry About Last Year',
      category: categories[1]._id,
      description:
        'Sorry about the christmas house fire! Happy Holidays!',
      image: 'Sorry about last year.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Tolerable Christmas',
      category: categories[1]._id,
      description: 'Just gotta get through it',
      image: 'Tolerable Christmas.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Feeling Crumby',
      category: [categories[2]._id, categories[4]._id],
      description:
        'Gingerbread men get sick too',
      image: 'feelingcrumby.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Oblivious Snowman',
      category: categories[2]._id,
      description:
        'Just a matter of time',
      image: 'puddle.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Sherlock Snow',
      category: categories[2]._id,
      description:
        'Elementary my dear snowman',
      image: 'sherlock snow.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Wrap Santa',
      category: categories[2]._id,
      description:
        'The O.S.C',
      image: 'wrap.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Chaotic Lovelife',
      category: categories[3]._id,
      description:
        'Gotta hand it to her',
      image: 'chaotic lovelife.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Eggnog',
      category: [categories[3]._id, categories[4]._id],
      description:
        'Go ahead and add in that rum',
      image: 'drink eggnog.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Drunk Santa',
      category: categories[3]._id,
      description:
        'Shots for Santa!',
      image: 'merry drunk.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Merry Christmas, Billy!',
      category: categories[3]._id,
      description:
        'You are on the naughty list',
      image: 'Merry_Christmas_B____.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Cousin Eddie',
      category: categories[3]._id,
      description:
        'Save the neck for me, Clark',
      image: 'sh_____ was full!.png',
      price: .99,
      quantity: 500,
    }, 
  ]);

  console.log('products seeded');


  // Created a user for testing purposes

  await User.create({
    firstName: 'Santa',
    lastName: 'Clause',
    email: 'santa@email.com',
    password: 'password123',
  });

  console.log('users seeded');

  process.exit();
});
