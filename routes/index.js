const usersRouter = require('./users');
const notesRouter = require('./notes');



function route(app) {
    app.use('/users', usersRouter);
    app.use('/api/notes', notesRouter);
}

module.exports = route;