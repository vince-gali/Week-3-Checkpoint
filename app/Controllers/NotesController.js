import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"
import { notesService } from "../Services/NotesService.js"
import { Note } from "../Models/Note.js"
import { Pop } from "../Utils/Pop.js"
// import { Pop } from "../Utils/Writer.js"


// function _drawCreateNoteButton(){
//     setHTML('createNote', Note.CreateNoteButton())
// }

function _drawNote(){
    console.log('drawing note')
    let notes = appState.notes
    let template = ''
    notes.forEach(note => template += note.NoteTemplate)
    setHTML('notes', template)
}


function _drawActiveNote(){
    // notes.forEach(note => template += note.NoteTemplate)


    // let activeNote = appState.activeNote
    // let note = appState.activeNote
    // setHTML('', note.NoteTemplate)

}

function _drawCreateNoteButton(){
    setHTML('createNote', Note.CreateNoteButton())
}






export class NotesController {
    constructor(){
        // console.log('hello from the controller')
        // _drawCreateNoteButton()
        // appState.on('activeNote', _drawActive)
        // CreateNoteButton()
        
        appState.on('activeNote', _drawActiveNote)
        appState.on('notes', _drawNote)
        appState.on('activeNote', _drawActiveNote)
        
    }

    // getNotes(){
    //     _drawNote()
    // }


    createNote(){
        window.event?.preventDefault()
        // console.log('creating note')
        // @ts-ignore
        const formHTML = event.target
        // console.log('this is an onsubmit event', formHTML.title.value)
        const formData = getFormData(formHTML)
        // // console.log('this is my formatted object')
        formData.userName = appState.userName
        // console.log(formData);
        notesService.createNote(formData)
        formHTML.reset()
        
    }

    async deleteNote(noteId){
        console.log('delete that note', noteId);
        if(await Pop.confirm("Are you sure?")){
            notesService.deleteNote(noteId)
        }
    }




    setActive(noteId){
        console.log('setting the active case', noteId)
        notesService.setActive(noteId)
        // document.querySelector('.noteBody').focus()
        // notesService.setActive(noteId)
    }


    


    
    

   
    




}





// function _drawCreateNoteButton() {
//     setHTML('notesButton', Note.CreateNoteButton)
// }

