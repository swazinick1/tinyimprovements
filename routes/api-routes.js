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

app.get('/api/users/:id', function (req, res){
    Users.find({_id:req.params._id})
    .populate('kudos')
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

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

app.post('/api/kudos', function(req,res){
    const userId = req.body.userId;
    const newEntry = {
        title: req.body.title,
        body: req.body.body
    }

    Kudos.create(newEntry)
    .then(function(kudoData){
        return Users.findOneAndUpdate({_id: userId},{$push: {Kudos: kudoData._id}},
            {new: true});
    })
    .then(function(userData){
        res.json(userData);
    })
    .catch (function(err){
        res.json(err);
    });
});








// app.post('/api/kudos', function(req, res){
//     Kudos.create(req.body)
//     .then(function(data){
//         let kudosId = data._id;
//         let usersId = req.params.usersId;
//         Users.findOneAndUpdate({_id:usersId},{$push: {kudos: kudosId}}, {new: true});
        
//     })
//     .then(function(data){
//         res.json(data);
//     })
//     .catch(function(err){
//         res.json(err);
//     });
// });

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




// users in db
// db.users.insert({username:"Issac", position:"Lead Scientist"},{username:"Kelly", position:"Manager"},{username:"Pete", position:"Lab Tech"},{username:"Naomi", position:"Lab Tech"},{username:"Sara", position:"Sales Lead"},{username:"Atom", position:"Building Block"}






}