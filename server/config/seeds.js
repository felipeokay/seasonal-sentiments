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
      image_url: 'https://i.imgur.com/hfhsFjf.png',
      category: [categories[0]._id, categories[4]._id],
      price: .99,
      quantity: 500,
    },
    {
      name: 'Happy Kwanzaa',
      description:
        'A festive kwanzaa scene',
      image: 'Happy_Kwanzaa.png',
      image_url: 'https://i.imgur.com/uFdDq9g.png',
      category: categories[0]._id,
      price: .99,
      quantity: 500,
    },
    {
      name: 'Laughter and Cheer',
      description:
        'A happy holiday family scene',
      image: 'laughter_and_cheer.png',
      image_url: 'https://i.imgur.com/LeDrGq2.png',
      category: categories[0]._id,
      price: .99,
      quantity: 500,
    },
    {
      name: 'Magical Christmas',
      category: categories[0]._id,
      description:
        'A festive house during the holidays',
      image: 'magical_christmas.png',
      image_url: 'https://i.imgur.com/LpZGuIZ.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Merry Christmas and a Happy New Year!',
      category: categories[0]._id,
      description:
        'Lovely place for the tree',
      image: 'MerryChristmas_happynewyear.png',
      image_url: 'https://i.imgur.com/j5WFBRv.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Happy Christmahanukwanzakah',
      category: categories[1]._id,
      description:
        'A celebration of all three religious holidays',
      image: 'Happy_Christmahanukwanzakah_1.png',
      image_url: 'https://i.imgur.com/7l7weUE.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Merry Stressmas',
      category: [categories[1]._id, categories[4]._id],
      description:
        'A stressed out elf',
      image: 'Merry_Stressmas.png',
      image_url: 'https://i.imgur.com/VEbKKza.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Seasons Greetings Colleagues',
      category: categories[1]._id,
      description:
        'Workplace holiday humor',
      image: 'Seasons_Greetings_IIC.png',
      image_url: 'https://i.imgur.com/87VlJSb.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Sorry About Last Year',
      category: categories[1]._id,
      description:
        'Sorry about the christmas house fire! Happy Holidays!',
      image: 'Sorryaboutlastyear.png',
      image_url: 'https://i.imgur.com/Gp9Kenc.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Tolerable Christmas',
      category: categories[1]._id,
      description: 'Just gotta get through it',
      image: 'TolerableChristmas.png',
      image_url: 'https://i.imgur.com/5btSENK.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Feeling Crumby',
      category: [categories[2]._id, categories[4]._id],
      description:
        'Gingerbread men get sick too',
      image: 'feelingcrumby.png',
      image_url: 'https://i.imgur.com/Tg89AMA.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Oblivious Snowman',
      category: categories[2]._id,
      description:
        'Just a matter of time',
      image: 'puddle.png',
      image_url: 'https://i.imgur.com/bRuHgtA.png',
      price: .99,
      quantity: 500,
    },
    {
      name: 'Sherlock Snow',
      category: categories[2]._id,
      description:
        'Elementary my dear snowman',
      image: 'sherlock_snow.png',
      image_url: 'https://i.imgur.com/ersdQDb.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Wrap Santa',
      category: categories[2]._id,
      description:
        'The O.S.C',
      image: 'wrap.png',
      image_url: 'https://i.imgur.com/xRQMCAd.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Chaotic Lovelife',
      category: categories[3]._id,
      description:
        'Gotta hand it to her',
      image: 'chaotic_lovelife.png',
      image_url: 'https://i.imgur.com/LzBVDMt.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Eggnog',
      category: [categories[3]._id, categories[4]._id],
      description:
        'Go ahead and add in that rum',
      image: 'drink_eggnog.png',
      image_url: 'https://i.imgur.com/9OB3p7G.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Drunk Santa',
      category: categories[3]._id,
      description:
        'Shots for Santa!',
      image: 'merry_drunk.png',
      image_url: 'https://i.imgur.com/PdOwl5E.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Merry Christmas, Billy!',
      category: categories[3]._id,
      description:
        'You are on the naughty list',
      image: 'MerryChristmasB.png',
      image_url: 'https://i.imgur.com/fDj18Xz.png',
      price: .99,
      quantity: 500,
    }, 
    {
      name: 'Cousin Eddie',
      category: categories[3]._id,
      description:
        'Save the neck for me, Clark',
      image: 'shwasfull.png',
      image_url: 'https://i.imgur.com/rHLqIie.png',
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
