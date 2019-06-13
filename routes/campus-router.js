'use strict';

module.exports = (app, db) => {
  // get all campuses
  app.get('/campus', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    db.campus.findAll()
      .then(campus => {
        res.json(campus);
      });
  });

  // get one campus by id
  app.get('/campus/:id', (req, res) => {
    const id = req.params.id;
    db.campus.find({
      where: { id: id}
    })
      .then(campus => {
        res.json(campus);
      });
  });

  // adding single campus 
  app.post('/campus', (req, res) => {
    console.log('this is a single campus', req.body)
    const name = req.body.name;
    const address = req.body.address;
    const description = req.body.description;
    const type = req.body.type;
    const imageUrl = req.body.imageUrl;
    db.campus.create({
      name : name,
      address: address,
      description: description,
      imageUrl : imageUrl,
      type: type
    })
      .then(newCampus => {
      res.json(newCampus);
    });
  });

  // updates the single campus
  app.patch('/campus/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.campus.find({
      where: { id: id }
    })
      .then(campus => {
        return campus.updateAttributes(updates);
      })
      .then(updatedCampus => {
        res.json(updatedCampus);
      });
  });

    // deletes the single campus
  app.delete('/campus/:id', (req, res) => {
    const id = req.params.id;
    //destroy is part of the library 
    db.campus.destroy({
      where: { id: id }
    })
      .then(deletedCampus => {
        res.json(deletedCampus);
      });
  });

};