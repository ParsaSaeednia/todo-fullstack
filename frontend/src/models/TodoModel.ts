export interface TodoViewModel {
  list: TodoModel[];
  parameters: Pick<TodoModel, "completed" | "title">;
}

export interface TodoModel {
  _id: string;
  title: string;
  completed: boolean;
}
