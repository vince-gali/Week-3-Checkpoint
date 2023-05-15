import { userService } from "../Services/UserService.js"
import { Pop } from "../Utils/Pop.js"

export class UserController {
    constructor(){
        // console.log('hello from the user controller')
        this.enterUserName()
    }

    async enterUserName(){
        // console.log('logging in')
        let input = await Pop.prompt("Enter your name")
        if (!input) return
        userService.enterUserName(input)
    }
}
