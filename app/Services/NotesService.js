import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js";

function _saveNotes(){
    saveState('notes', appState.notes)
}

class NotesService{
    createNote(formData) {
        let newNote = new Note (formData)
        console.log('newNote', newNote);
        appState.notes.push(newNote)
        _saveNotes()
        appState.emit('notes')


        appState.activeNote = newNote

    }

    deleteNote(noteId){
        let noteToDelete = appState.notes.find(n => n.id == noteId)
        console.log('deleting that note');
        appState.notes = appState.notes.filter(n => n.id != noteId)
        _saveNotes()
    }



    // saveNote(noteBody){
    //     let active

    // }


    setActive(noteId){
        let foundNote = appState.notes.find(n => n.id == noteId)
        console.log(foundNote);
    }


    // setActive(noteId){
    //     let foundNote = appState.find(n => n.id == noteId)
    //     appState.activeNote = foundNote

    // }


    // unlockNote(){
    //     let foundNote = appState.activeNote
    //     foundCase.unlocked = !foundNote.unlocked
    //     appState.emit('activeNote')
    // }
}










export const notesService = new NotesService()