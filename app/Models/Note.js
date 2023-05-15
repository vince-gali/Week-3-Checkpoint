import { generateId } from "../Utils/generateId.js";
import { appState } from "../AppState.js";


export class Note{


      constructor(data){
        this.id = data.id || generateId()
        this.title = data.title
        this.noteBody = data.noteBody || 'Jot something here...'
        this.userName = data.userName
        this.quantity = 0
        // TODO for the date, check out the MDN docs for date constructor .... toLocaleDateString or ToLocaleDate??
        this.date = data.date ? new Date(data.date) : new Date()
        this.color = data.color
        // this.ime = data.time ? new Time(data.Time) : new Time()
        // TODO add in a property for color - this can be done just like we selected for agency in redacted using a select option on your form, where the value is going to be the hex code for the color

        // TODO color is now a property we can use as a style on an element in the active note template .... like a style for background color or text color, using string interpolation 
        
    }

    
    // TODO add to the create note button template - we want to add a count of the number of notes we have stored ..... --> .length

    static CreateNoteButton(){
      return `
      <form action="" onsubmit="app.notesController.createNote()">
        <div class="row modal-body container-fluid p-3">
          <div data-bs-target="">
          
            <input required minlength="3" maxlength="15" class="form-control  w-25 " type="text" name="title" value="Title">

            <label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" name="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">

            <button class="btn btn-success w-25 my-1" type="submit" onclick="app.notesController.NoteTemplate()">
            <i class="mdi mdi-plus"></i>Create Note
          </button>

            <div  class="card d-flex w-25">Total Jots:<span id="total">0</span></div>
            
          </div>
      </form>
      ` 
    } 

    get CreateNoteList(){
      return `
      
<div>

      <div class="col-4 p-3" onclick="app.notesController.setActive('${this.id}')">
    <div class="card" id="notes">
      <h3 style="color: ${this.color}">${this.title}<i class="mdi mdi-note-check"></i></h3>
      <p>Created: ${this.ComputeDate}</p>
    </div>
    </div>
      `
    }

 




    get NoteTemplate(){
        return `

        <section class="row d-flex">

        



        <div class="col-10 p-3">

        <div class="text-end">
          <button onclick="app.notesController.getNotes()">My Jots</button>
        </div>
          <div class="card p-4" >

         
      
            <div class="" id="notes">
              <h3 style="color: ${this.color}">${this.title}<i class="mdi mdi-note-check"></i></h3>
              <p>Created: ${this.ComputeDate}</p>
      
              <textarea  class="w-100 noteBody" name="noteBody" value="" id="noteBody" cols="30"
                rows="10">${this.noteBody}</textarea>
      
              <button class="btn btn-danger text-end" onclick="app.notesController.deleteNote('${this.id}')"> <i
                  class="mdi mdi-delete"></i>Delete Note</button>
      
              <button class="btn btn-success w-25 my-1" type="submit" onclick="app.notesController.saveNotes()">
                <i class="mdi mdi-file"></i>Save Note
              </button>
            </div>
          </div>
      </section>`
    }






    get ComputeDate(){
        let date = this.date
        return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())
    }

    get ComputeTitle(){
        return (this.noteBody.slice(0,5) + '....')
    }







}