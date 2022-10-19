const express = require('express');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const route = require('./routes');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//  Route init
route(app);
// Connect db
connectDB.connect();

// Below MongoDB and Above Listen Server
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})