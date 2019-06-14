const  db = require('./config/db');
//const { green, red } = require('chalk');



const seed = async () => {
  await db.sequelize.sync({force:true});
  await db.student.create({
    firstName: 'Rose',
    lastName: 'Baker',
    email: 'Rose.b@gmail.com',
    imageUrl: 'https://i.ibb.co/WswKdsx/48-B9-E6-DC-91-D4-4-E9-D-A507-E6-C1296-AB686.jpg',
    gpa: 4.0,
  });
  await db.student.create({
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'SarahWilliams@gmail.com',
    imageUrl: 'https://i.ibb.co/9VVgRRg/Sarah.png',
    gpa: 4.0,
  });
  await db.student.create({
    firstName: 'Josh',
    lastName: 'Ortiz',
    email: 'Joshortiz@gmail.com',
    imageUrl: 'https://i.ibb.co/gdg2kWH/B634-B90-A-F219-40-BB-A2-EC-42-F41870269-B.jpg',
    gpa: 4.0,
  });
  await db.student.create({
    firstName: 'Ali',
    lastName: 'Khan',
    email: 'AliKhan@gmail.com',
    imageUrl: 'https://i.ibb.co/RbM5mnW/handsome-635832-1280.jpg',
    gpa: 3.7,
  });

  await db.campus.create({
    name: 'Hunter College',
    imgUrl: '',
    address: '695 Park Ave, New York, NY 10065',
    description:
      'Hunter College is one of the constituent colleges of the City University of New York, an American public university. It is located in the Lenox Hill neighborhood of the Upper East Side of Manhattan, New York City. The college offers studies in more than one hundred undergraduate and postgraduate fields across five schools. It also administers Hunter College High School and Hunter College Elementary School.',
  });

  await db.campus.create({
    name: 'Baruch College',
    imgUrl: '',
    address: ' 55 Lexington Ave, New York, NY 10010',
    description:
      'Baruch College is one of ten senior colleges of The City University of New York (CUNY), the largest urban public university in the United States.',
  });
  await db.campus.create({
    name: 'Lehman College',
    imgUrl: '',
    address: '250 Bedford Park Blvd W, The Bronx, NY 10468',
    description:
      'Lehman College, a senior college of The City University of New York, is located on a tree-lined 37-acre campus. With more than 14,130 students and a wide range of academic offerings, Lehman prides itself on its excellent faculty and successful students that are empowered, engaged and educated.',
  });
  await db.campus.create({
    name: 'Queens College',
    imgUrl: '',
    address: '65-30 Kissena Blvd, Flushing, NY 11367',
    description:
      'Queens College (QC) is one of the four-year colleges in the City University of New York system',
  });
  console.log('Seeding success!');
  db.sequelize.close();
};

seed().catch(err => {
  console.error('Oh noes! Something went wrong!');
  console.error(err);
  db.sequelize.close();
});