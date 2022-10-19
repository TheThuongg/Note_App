const dotenv = require('dotenv');
const mongoose = require('mongoose');



async function connect() {

    try{
        await mongoose.connect(process.env.MONGOOSE_URI || 'mongodb+srv://admin:Thuonghang.22@note-app.svokruj.mongodb.net/notes?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });  
        console.log('Connected to DB!!!');
    }
    catch ( error ){
        console.log('Error connecting!!');
    }
}
module.exports = { connect };