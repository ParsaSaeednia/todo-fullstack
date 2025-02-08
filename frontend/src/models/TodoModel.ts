export class TodoViewModel {
  list: TodoModel[];
  parameters: Pick<TodoModel, "completed" | "title">;

  constructor() {
    this.list = [];
    this.parameters = { title: "", completed: false };
  }
}

export class TodoModel {
  _id: string;
  title: string;
  completed: boolean;

  constructor(_id: string, title: string, completed: boolean) {
    this._id = _id;
    this.title = title;
    this.completed = completed;
  }
}
