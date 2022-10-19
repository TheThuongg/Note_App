const { response } = require('express');
const Notes = require('../models/noteModel')

class NotesController {
    // [Get] /api/notes/
    async getNotes (req, res, next) {
        try {
            const notes = await Notes.find({ user_id: req.user.id});
            res.json( notes );
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    } ;
    // [POST] /api/notes/
    async createNote (req, res, next) {
        try {
            const {title, content, date } = req.body ;
            const newNote = new Notes({
                title,
                content,
                date,
                user_id : req.user.id,
                name: req.user.name,
            })
            await newNote
                .save();
            res.json({msg: "Create a Note"});

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    };
    // [DELETE] /api/notes/:id
    async deleteNote (req, res) {
        try {
            await Notes.findByIdAndDelete(req.params.id);
            res.json({msg: " Deleted a Note!"})
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    };
    // [PUT] /api/notes/:id
    async updateNote (req, res) {
        try {
            const {title, content, date} = req.body;
            await Notes.findOneAndUpdate({_id: req.params.id},{
                title,
                content,
                date,
            })
            res.json({ msg : "Updated a Note"})
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    };
    // [GET] /api/notes/:id
    async getNote (req, res) {
        try {
            const note = await Notes.findById(req.params.id);
            res.json(note);
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
    
}

module.exports = new NotesController();