export interface TodoData {
  id: number;
  text: string;
}

export type TodoCreateData = Omit<TodoData, "id">;
