const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/api/users')
const app = express()

// Middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use((req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
})
    
const db = require('../../config/keys').mongodbURI
    
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('DB connected'))
.catch((err) => console.log('DB error', err))
    
app.use(passport.initialize())
require('../../config/passport')(passport)
app.use('/api/users', users)
    
if (process.env.NODE_ENV === 'production') { 
    app.enable('trust proxy'); 
    app.use((req, res, next) => { 
        if (req.secure) next();
        else res.redirect(`https://'${req.headers.host}${req.url}`);
    });
}

const port = process.env.PORT || 3001
    
app.listen(port, () => console.log(`App listening on port ${port}`));
