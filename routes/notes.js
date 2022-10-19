const express = require('express');
const router = express.Router();
const notesController = require('../app/controllers/NoteController')
const auth = require('../app/middleware/auth');

router.get('/', auth, notesController.getNotes );
router.post('/', auth, notesController.createNote );


router.get('/:id', auth, notesController.getNote );
router.put('/:id', auth, notesController.updateNote );
router.delete('/:id', auth, notesController.deleteNote );




module.exports = router;