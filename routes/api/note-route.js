const router = require("express").Router();
const { notes } = require('../../db/db.json');
const { createNote, deleteNote } = require('../../public/assets/js/note-function');

router.get('/', ( req, res ) => {
    let saved = notes;
    res.json(saved);
});

router.post('/', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
});

router.delete('/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});

module.exports = router;