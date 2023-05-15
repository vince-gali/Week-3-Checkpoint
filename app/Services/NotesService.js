import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js";
import { setHTML } from "../Utils/Writer.js";

function _saveNotes(){
    saveState('notes', appState.notes)
}


// function _drawCreateNoteButton(){
//     let note = appState.activeNote
//     setHTML('notesButton', Note.NoteTemplate)
// }

class NotesService{
    createNote(formData) {
        let newNote = new Note (formData)
        console.log('newNote', newNote);
        appState.notes.push(newNote)
        _saveNotes()
        appState.activeNote = newNote
        appState.emit('notes')



    }

    unlockNote(){
        let foundNote = appState.activeNote
        appState.emit('activeNote')
    }


    saveNote(noteBody){
        let activeNote = appState.activeNote
        // @ts-ignore
        activeNote.noteBody = noteBody
        appState.emit('activeNote')
        _saveNotes()
    }

    deleteNote(noteId){
        let noteToDelete = appState.notes.find(n => n.id == noteId)
        console.log('deleting that note');
        appState.notes = appState.notes.filter(n => n.id != noteId)
        _saveNotes()
    }


    setActive(noteId){
        let foundNote = appState.notes.find(n => n.id == noteId)
        // console.log(foundNote);
        appState.activeNote = foundNote
    }


}







export const notesService = new NotesService()