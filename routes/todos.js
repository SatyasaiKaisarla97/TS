"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
router.put("/todo/:todoId", (req, res, next) => {
    const id = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        res.status(200).json({ message: "todos updated", todos: todos });
    }
    res.status(404).json({ message: "could not find a todo" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: "deleted the todo item", todos: todos });
});
exports.default = router;
