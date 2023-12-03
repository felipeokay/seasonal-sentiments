const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');


  // test categories to get started with. I was thinking "other religions" sounded wrong. Those can be in with traditional I guess?
  const categories = await Category.insertMany([
    { name: 'Traditional' },
    { name: 'DarkHumor' },
    { name: 'Boring' },
    { name: 'Snarky' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Merry and Bright',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'merryandbright.png',
      category: categories[0]._id,
      price: .99,
    },
    {
      name: 'Obligatory Gesture',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'obligatorygesture.png',
      category: categories[0]._id,
      price: .99,
    },
    {
      name: 'Merry and Bright 2',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'merryandbright.png',
      price: .99,
    },
    {
      name: 'Obligatory Gesture 2',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'obligatorygesture.png',
      price: .99,
    },
    {
      name: 'Merry and Bright 3',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'merryandbright.png',
      price: .99,
    },
    {
      name: 'Obligatory Gesture 3',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'obligatorygesture.png',
      price: .99,
    },
    {
      name: 'Merry and Bright 4',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'merryandbright.png',
      price: .99,
    },
    {
      name: 'Obligatory Gesture 4',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'obligatorygesture.png',
      price: .99,
    },
    {
      name: 'Merry and Bright 5',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'merryandbright.png',
      price: .99,
    },
    {
      name: 'Obligatory Gesture 5',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'obligatorygesture.png',
      price: .99,
    },
    {
      name: 'Merry and Bright 6',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'merryandbright.png',
      price: .99,
    },
    {
      name: 'Obligatory Gesture 6',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'obligatorygesture.png',
      price: .99,
    }
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
