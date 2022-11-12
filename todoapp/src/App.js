import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { element, render } from "./view/html-util.js";

export class App {
  // 1.Init
  #todoListModel = new TodoListModel();

  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    // 2. Update
    this.#todoListModel.onChange(() => {
      const todoListElement = element`<ul></ul>`;
      const todoItems = this.#todoListModel.getTodoItems();
      todoItems.forEach((item) => {
        const todoItemElement = element`<li>${item.title}</li>`;
        todoListElement.appendChild(todoItemElement);
      });
      // 上書きする
      render(todoListElement, containerElement);
      // カウントを取得して更新する
      todoItemCountElement.textContent = `Todoアイテム数: ${this.#todoListModel.getTotalCount()}`;
    });
    // 3. Add
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      // 新しいTodoItemをTodoListへ追加
      this.#todoListModel.addTodo(
        new TodoItemModel({
          title: inputElement.value,
          completed: false,
        })
      );
      // フォームをクリア
      inputElement.value = "";
    });
  }
}
