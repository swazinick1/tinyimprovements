const Users =require('../models/users');
const Kudos = require('../models/kudos');

module.exports = function (app) {

// app.get('/api/users', function (req,res){
//     Users.find({})
//     .then(function(data){
//         res.json(data);
//     })
//     .catch(function (err){
//         res.json(err);
//     });
// });

app.post('/api/users', function (req,res){
    Users.create(req.body)
    .then(function (data){
        res.json(data);
    })
    .catch(function (err){
        res.json(err);
    });
});

app.get('/api/kudos', function(req, res){
    Kudos.find({})
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

app.post('/api/kudos', function(req, res){
    Kudos.create(req.body)
    .then(function(data){
        let kudosId = data._id;
        let usersId = req.params.usersId;
        Users.findOneAndUpdate({_id:usersId},{$push: {kudos: kudosId}}, {new: true});
        
    })
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

app.get('/api/users', function (req,res){
    Users.find({})
    .populate('kudos')
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});









}