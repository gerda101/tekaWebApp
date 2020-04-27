const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose')

//Mongoose modules load from index.js
const {List, Media, Customer, Rent} = require('./db/models');

//middleware load
app.use(bodyParser.json());

//listener
app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});

//Routing
//Lists
app.get('/lists', (req, res) =>{
    //array return
    List.find({}).then((list) =>{
        res.send(list);
    })
});

app.post('/lists', (req, res) =>{
    //new list and return
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) =>{
        res.send(listDoc);
    })
});

app.patch('/lists/:id', (req, res) =>{
    //update and return
    List.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() =>{
        res.sendStatus(200);
    });
});

app.delete('/lists/:id', (req, res) =>{
    //delete and return
    List.findOneAndRemove({_id: req.params.id}).then((removedListDoc) =>{
        res.send(removedListDoc);
    });
});

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

//Customer

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