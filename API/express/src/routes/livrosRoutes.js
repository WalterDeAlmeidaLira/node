import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/:id", livroController.listarLivrosPorId)
    .post("/livros",livroController.cadastraLivro)
    .put("/livros/:id",livroController.atualizarLivro)
    .delete("/livros/:id", livroController.excluirLivros)

export default router;