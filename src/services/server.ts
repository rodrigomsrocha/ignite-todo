import { createServer, Model } from "miragejs";
import { v4 as uuid } from "uuid";

interface Todo {
  id: string;
  status: "todo" | "complete";
  taskContent: string;
}

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      todo: Model.extend<Partial<Todo>>({}),
    },
    seeds(server) {
      server.create("todo", {
        id: uuid(),
        status: "todo",
        taskContent:
          "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      });
      server.create("todo", {
        id: uuid(),
        status: "todo",
        taskContent:
          "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      });
      server.create("todo", {
        id: uuid(),
        status: "todo",
        taskContent:
          "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      });
      server.create("todo", {
        id: uuid(),
        status: "todo",
        taskContent:
          "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      });
    },
    routes() {
      this.namespace = "api/todos";
      this.get("/", (schema) => {
        return schema.all("todo");
      });
      this.post("/", (schema, req) => {
        const { taskContent } = JSON.parse(req.requestBody);
        const taskToBeCreated = {
          id: uuid(),
          taskContent,
          status: "todo",
        };
        return schema.create("todo", taskToBeCreated);
      });
      this.delete("/:id", (schema, req) => {
        const { id } = req.params;
        const taskToBeDeleted = schema.find("todo", id);

        if (taskToBeDeleted) taskToBeDeleted.destroy();
        return schema.all("todo");
      });
    },
  });
  return server;
}
