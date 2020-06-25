let express = require("express");
let app = express();

const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose')

//Mongoose modules load from index.js
const { Media, Customer, Rent, User} = require('./db/models');

//middleware load
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Verify Refresh Token Middleware
let verifySession = (req, res, next) => {
    let refreshToken = req.header('x-refresh-token');

    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            // user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }

        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {
            next();
        } else {
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }
    }).catch((e) => {
        res.status(401).send(e);
    })
}

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

//Users
app.post('/users', (req, res) =>{
    let body = req.body;
    let newUser = new User(body);

    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        return newUser.generateAccessAuthToken().then((accessToken) => {
            return {accessToken,refreshToken}
        });
    }).then((authTokens) => {
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.post('/users/login', (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {
            return user.generateAccessAuthToken().then((accessToken) => {
                return {accessToken,refreshToken}
            });
        }).then((authTokens) => {
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
        })
        }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get('/users/me/access-token', verifySession, (req, res) => {
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})