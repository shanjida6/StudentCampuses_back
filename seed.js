const { db, student, campus } = require('./config/db');
const { green, red } = require('chalk');

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  await Student.create({
    firstName: 'Shanjida',
    lastName: 'Akhter',
    email: 'shanjida.a@gmail.com',
    imageUrl: '',
    gpa: 4.0,
  });
  await Student.create({
    firstName: 'Erica',
    lastName: 'Elliston',
    email: 'ericahelliston@gmail.com',
    imageUrl: '',
    gpa: 4.0,
  });
  await Student.create({
    firstName: 'Josh',
    lastName: 'Hutcherson',
    email: 'Joshhutcherson@gmail.com',
    imageUrl: '',
    gpa: 4.0,
  });

  await Campus.create({
    name: 'Hunter College',
    imgUrl: '',
    address: '695 Park Ave, New York, NY 10065',
    description:
      'Hunter College is a cuny college. Originally it was an all girls college back in the 80s.',
  });
  await Campus.create({
    name: 'Baruch College',
    imgUrl: '',
    address: ' 55 Lexington Ave, New York, NY 10010',
    description:
      'Baruch College is one of ten senior colleges of The City University of New York (CUNY), the largest urban public university in the United States.',
  });
  await Campus.create({
    name: 'Lehman College',
    imgUrl: '',
    address: '250 Bedford Park Blvd W, The Bronx, NY 10468',
    description:
      'Lehman College, a senior college of The City University of New York, is located on a tree-lined 37-acre campus. With more than 14,130 students and a wide range of academic offerings, Lehman prides itself on its excellent faculty and successful students that are empowered, engaged and educated.',
  });
  await Campus.create({
    name: 'Queens College',
    imgUrl: '',
    address: '65-30 Kissena Blvd, Flushing, NY 11367',
    description:
      'Queens College (QC) is one of the four-year colleges in the City University of New York system',
  });
  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});