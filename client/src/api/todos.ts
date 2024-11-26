import axios from "axios";
import { API_PREFIX } from "../../../shared/constants";
import { TodoCreateData, TodoData } from "../../../shared/models/todo-data";

const instance = axios.create({
  baseURL: `http://<server-container-name>:<server-container-port>/${API_PREFIX}/todos/`,
  timeout: 10000,
});

export async function getTodos(): Promise<TodoData[]> {
  return (await instance.get("")).data;
}

export async function createTodo(body: TodoCreateData): Promise<TodoData> {
  return (await instance.post("", body)).data;
}

export async function deleteTodo(id: TodoData["id"]): Promise<void> {
  await instance.delete(`/${id}`);
}
