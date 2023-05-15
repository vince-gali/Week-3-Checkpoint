import { Value } from "./Models/Value.js"
import { Note } from "./Models/Note.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./Models/Note.js').Note[]} */
  // notes = []

  notes = loadState('notes', [Note])

  // /**@type {import('.Models/Note.js').Note|null} */
activeNote = null

// noteBody = null

  // notes = loadState('notes', [Note])

// password = {
//   '😎' : 'Vince'
// }

userName = ''


}




















export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
