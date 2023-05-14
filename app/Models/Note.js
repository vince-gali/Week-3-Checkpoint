import { generateId } from "../Utils/generateId.js";
import { appState } from "../AppState.js";



export class Note{
    static CreateNoteButton(arg0, CreateNoteButton) {
        throw new Error("Method not implemented.");
    }
    constructor(data){
        this.id = data.id || generateId()
        this.title = data.title
        this.noteBody = data.noteBody || 'Start Typing Notes'
        // this.clearance = data.clearance
        this.userName = data.userName
        this.date = data.date ? new Date(data.data) : new Date()
        // this.unlocked = false
    }

    // get CardTemplate(){
    //     return `
    //     <div class="card col-md-4" id="notes">
    //     <h3>${this.title}</h3>
    //     <p>${this.date}</p>
    //     <p>words / characters </p>
    //       <textarea class="w-100" name="noteBody" id="noteBody" cols="30" rows="10">${this.noteBody}</textarea>
    //   </div>
    //   <div>
    //     <button class="btn btn-danger"> <i class="mdi mdi-delete"></i> </button>
    //   </div>
    //     `
    // }


    get CreateNoteButton(){
      return `
      <div id="createNote">
      <form action="" onsubmit="app.notesController.createNote()">
      <div class="row modal-body container-fluid">
        <section>

        </section>
          <input class="form-control my-1" type="text" name="title" value="title">
          <button ${appState.userName != '' ? '': 'disabled'} class="btn btn-success w-75 my-1" type="submit">
            <i class="mdi mdi-plus"></i>Create Note
          </button>
        </form>
      </div>
      </div>
      `
    }


    get NoteTemplate(){
        return `
      
         <div class="col-md-4" id="notes">
         <h3>${this.title}</h3>
         <p>${this.date}</p>
       
       </div>

       <div class="col-8" onclick= "app.notesController.setActive('${this.id}')">
          <textarea class="w-100" name="noteBody" id="noteBody" cols="30" rows="10">${this.noteBody}</textarea>
       </div>
       <div>
         <button class="btn btn-danger" onclick="app.notesController.deleteNote('${this.id}')"> <i class="mdi mdi-delete"></i>Delete Note </button>
      </div>
      

        `
    }

    // NoteForm(){
    //     return `
    //     <div class="row" id="createNote">
    //       <form action="" onsubmit="app.notesController.createNote()">
    //     <input class="form-control my-1" type="text" name="text" value="Note Title">
    //         <button class="btn btn-success w-75 my-1" type="submit"  onclick="app.noteController.createNote()">
    //           <i class="mdi mdi-plus"></i>Create Note
    //         </button>
    //       </form>
    //     </div>
    //     `
        
    // }


    // SECTION get function below is similar to get CasesTemplate
    get NoteViewTemplate(){
      return `
      <div class="d-flex justify-content-between" onclick="app.notesController.setActive('${this.id}')">
        <p> ${this.ComputeTitle}</p>
        <p> ${this.ComputeDate}</p>
      </div>

      
      `
    }





    // get RedactedNoteTemplate(){
    //     return `
        
    //     `
    // }








    get ComputeDate(){
        let date = this.date
        return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())
    }

    get ComputeTitle(){
        return (this.noteBody.slice(0,15) + '....')
    }







}