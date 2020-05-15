let express = require("express");
let app = express();

const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose')

//Mongoose modules load from index.js
const { Media, Customer, Rent} = require('./db/models');

//middleware load
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//listener
app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});

//Routing
//Media
app.get('/media', (req, res) =>{
    //array return
    Media.find({}).then((media) =>{
        res.send(media);
    })
});

app.post('/media', (req, res) =>{
    //new list and return
    let title = req.body.title;
    let mediaType = req.body.mediaType;
    let duration = req.body.duration;
    let mediaStatus = req.body.mediaStatus;

    let newMedia = new Media({
        title,
        mediaType,
        duration,
        mediaStatus
    });
    newMedia.save().then((listMedia) =>{
        res.send(listMedia);
    })
});

app.patch('/media/:id', (req, res) =>{
    //update and return
    Media.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() =>{
        res.sendStatus(200);
    });
});

app.delete('/media/:id', (req, res) =>{
    //delete and return
    Media.findOneAndRemove({_id: req.params.id}).then((removedMediaDoc) =>{
        res.send(removedMediaDoc);
    });
});

//Customers
app.get('/customer', (req, res) =>{
    //array return
    Customer.find({}).then((customer) =>{
        res.send(customer);
    })
});

app.post('/customer', (req, res) =>{
    //new list and return
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;

    let newCustomer = new Customer({
        name,
        phone,
        address
    });
    newCustomer.save().then((listCustomer) =>{
        res.send(listCustomer);
    })
});

app.patch('/customer/:id', (req, res) =>{
    //update and return
    Customer.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() =>{
        res.sendStatus(200);
    });
});

app.delete('/customer/:id', (req, res) =>{
    //delete and return
    Customer.findOneAndRemove({_id: req.params.id}).then((removedCustomerDoc) =>{
        res.send(removedCustomerDoc);
    });
});

//Rents
app.get('/rent', (req, res) =>{
    //array return
    Rent.find({}).then((rent) =>{
        res.send(rent);
    })
});

app.post('/rent', (req, res) =>{
    //new list and return
    let customer = req.body.customer;
    let media = req.body.media;
    let rentDate = req.body.rentDate;
    let dueDate = req.body.dueDate;
    let status = req.body.status;

    let newRent = new Rent({
        customer,
        media,
        rentDate,
        dueDate,
        status
    });
    newRent.save().then((listRent) =>{
        res.send(listRent);
    })
});

app.patch('/rent/:id', (req, res) =>{
    //update and return
    Rent.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() =>{
        res.sendStatus(200);
    });
});

app.delete('/rent/:id', (req, res) =>{
    //delete and return
    Rent.findOneAndRemove({_id: req.params.id}).then((removedRentDoc) =>{
        res.send(removedRentDoc);
    });
});