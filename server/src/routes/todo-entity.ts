import { Router } from "express";
import { TodoEntity } from "../db/todo-entity";

const router = Router();

router.get("/", async (req, res) => {
  const results = await TodoEntity.findAll({
    order: [["id", "ASC"]],
  });

  return res
    .status(200)
    .send(results.map((result) => result.get({ plain: true })));
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const newTodoInstance = await TodoEntity.create({
    text: req.body.text,
  });

  return res.status(201).send(newTodoInstance.get({ plain: true }));
});

router.delete("/:id", async (req, res) => {
  await TodoEntity.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.status(204).end();
});

export default router;
