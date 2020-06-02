import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular To-Do'
  userInput = ''
  todos = []

  onAddTodoClicked () {
    if (this.userInput.trim() === '') {
      return
    }
    const newTodo = {
      id: Math.random(),
      name: this.userInput,
      completed: false
    }
    this.todos.push(newTodo)
  }

  onTodoClicked (todo: any) {
    let position = this.todos.indexOf(todo)
    if (todo.completed) {
      for (let i = 0; i < this.todos.length; i++) {
        if (i === position) {
          this.todos.splice(i, 1)
          break
        }
      }
    } else {
      todo.completed = true
      this.todos.sort((a, b) => a.completed - b.completed)
    }
  }
}
