'use strict';

//injecting the app and db objects into each route 
module.exports = (app, db) => {
  // get all students 
  app.get('/student', (req, res) => {
    /*res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')*/0
    db.student.findAll()
      .then(students => {
        res.json(students);
      });
  });

  // get one student by id
  app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    db.student.find({
      where: { id: id}
    })
      .then(student => {
        res.json(student);
      });
  });

  // adding single student 
  app.post('/student', (req, res) => {
    console.log('single student here', req.body)
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const gpa= req.body.gpa;
    const campus_id = req.body.campus_id;
    const type = req.body.type;
    db.student.create({
      firstName: firstName,
      lastName : lastName,
      email : email,
      gpa: gpa,
      campus_id: campus_id ,
      type: type
    })
      .then(newStudent => {
        console.log(newStudent);
      res.json(newStudent);
    });
  });

  // updates the single student 
  app.patch('/student/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.student.find({
      where: { id: id }
    })
      .then(student => {
        return student.updateAttributes(updates);
      })
      .then(updatedStudent => {
        res.json(updatedStudent);
      });
  });

    // deletes the single student 
  app.delete('/student/:id', (req, res) => {
    const id = req.params.id;
    //destroy is part of the library 
    db.student.destroy({
      where: { id: id }
    })
      .then(deletedStudent => {
        res.json(deletedStudent);
      });
  });

};