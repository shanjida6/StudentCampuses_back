const  db = require('./config/db');
//const { green, red } = require('chalk');

const seed = async () => {
  await db.sequelize.sync({force:true});
  // seed your database here!
  await db.student.create({
    firstName: 'Shanjida',
    lastName: 'Akhter',
    email: 'shanjida.a@gmail.com',
    imageUrl: '',
    gpa: 4.0,
  });
  await db.student.create({
    firstName: 'Erica',
    lastName: 'Elliston',
    email: 'ericahelliston@gmail.com',
    imageUrl: '',
    gpa: 4.0,
  });
  await db.student.create({
    firstName: 'Josh',
    lastName: 'Hutcherson',
    email: 'Joshhutcherson@gmail.com',
    imageUrl: '',
    gpa: 4.0,
  });

  await db.campus.create({
    name: 'Hunter College',
    imgUrl: '',
    address: '695 Park Ave, New York, NY 10065',
    description:
      'Hunter College is a cuny college. Originally it was an all girls college back in the 80s.',
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