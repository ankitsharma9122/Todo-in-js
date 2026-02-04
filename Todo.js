export class Todo {
  constructor() {
    this.todo = [];
  }

  addTodo(value) {
    const payload = {
      id: Date.now().toString(),
      item: value,
      completed: false,
    };

    this.todo.push(payload);
    return payload;
  }

  deleteTodo(item) {
    this.todo = this.todo.filter((data) => data.id !== item.id);
  }

  updateTodod(ID, newValue) {
    this.todo = this.todo.map((data) => {
      if (ID == data.id) {
        return {
          ...data,
          completed: newValue ?? data.item,
        };
      } else {
        return data;
      }
    });
  }
}
