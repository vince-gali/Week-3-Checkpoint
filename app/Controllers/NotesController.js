import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"
import { notesService } from "../Services/NotesService.js"
import { Note } from "../Models/Note.js"
import { Pop } from "../Utils/Pop.js"
// import { Pop } from "../Utils/Writer.js" 


function _drawNote(){
    // console.log('drawing note')
    let notes = appState.notes
    let template = ''
    let filterNotes = notes.filter(n => n.userName += appState.userName)
    filterNotes.forEach(n => template += n.CreateNoteList)
    console.log('total notes', filterNotes.length);
    // notes.forEach(note => template += note.NoteTemplate)
    setHTML('notes', template)
    setHTML('total', filterNotes.length)
    
    
}


function _drawActiveNote(){
    let activeNote = appState.activeNote
    // if (appState.userName == this.userName)
    setHTML('notes', activeNote.NoteTemplate)
}



function _drawCreateNoteButton(){
    setHTML('createNote', Note.CreateNoteButton())
}

function _drawTotal(){
    let total = appState.notes.length
}

function _drawNoteList(){
    let notes = appState.notes
    let template = ''
    let filterNotes = notes.filter(n => n.userName += appState.userName)
    // filterNotes.length(n => template += n.CreateNoteList)
    filterNotes.forEach(n => template += n.CreateNoteList)
    setHTML('notes', template)
    setHTML('total', filterNotes.length)
}


export class NotesController {
    constructor(){
        // console.log('hello from the controller')
        appState.on('userName', _drawCreateNoteButton)
        // TODO double check redacted, right now we aren't drawing the note list until we create a new note
        appState.on('userName', _drawNoteList)
        appState.on('notes', _drawNote)
        // appState.on('notes', _drawTotal)
        appState.on('activeNote', _drawActiveNote)
    }

    saveNotes(){
        let note = document.getElementById('noteBody')
        let noteBody = note.value
        notesService.saveNote(noteBody)
    }

    getNotes(){
        _drawNote()
    }

    getTotal(){
        _drawTotal()
    }



    createNote(){
        window.event?.preventDefault()
        // console.log('creating note')
        // @ts-ignore
        const formHTML = event.target
        // console.log('this is an onsubmit event', formHTML.title.value)
        const formData = getFormData(formHTML)
        // // console.log('this is my formatted object')
        // @ts-ignore
        formData.userName = appState.userName
        // console.log(formData);
        notesService.createNote(formData)
        formHTML.reset()
        // this.quantity++
    }

    async deleteNote(noteId){
        console.log('delete that note', noteId);
        if(await Pop.confirm("Are you sure?")){
            notesService.deleteNote(noteId)
        }
    }

    myNotes(){
        // console.log('going to my notes');
        
    }


    unlockNote(){
        notesService.unlockNote()
    }




    setActive(noteId){
        console.log('setting the active note', noteId)
        notesService.setActive(noteId)
        // debugger
    }




}





// function _drawCreateNoteButton() {
//     setHTML('notesButton', Note.CreateNoteButton)
// }

