import LivroModel from "../models/LivroModel.js";
import AutorModel from "../models/AutorModel.js";
import CategoriaModel from "../models/CategoriaModel.js";

export default class LivroController {
    static listar(req, res) {
        try {
            const livros = LivroModel.listar();
            if (!livros) {
                res.status(400).json({ msg: "Erro ao listar os livros" });
                return;
            }
            res.status(200).json(livros);

        } catch (error) {
            res.status(500).json({ msg: "Erro interno", erro: error.message });
        }
    }

    static criar(req, res) {
        try {
            const { titulo, autorId, categoriaId, anoPublicacao, preco } = req.body;
            if (!titulo || !autorId || !categoriaId || !anoPublicacao || !preco) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos." });
                return;
            }
            if (!AutorModel.buscarPorId(autorId)) {
                res.status(400).json({ msg: "Autor inválido!" });
                return;
            }
            if (!CategoriaModel.buscarPorId(categoriaId)) {
                res.status(400).json({ msg: "Categoria inválida!" });
                return;
            }
            if (Number(anoPublicacao) <= 1800 || Number(anoPublicacao) > new Date().getFullYear()) {
                res.status(400).json({ msg: "Ano inválido!" });
                return;
            }
            if (Number(preco)<=0) {
                res.status(400).json({ msg: "Preço deve ser maior que zero!" });
                return;
            }
            const livros = LivroModel.listar();
            const novoLivro = {
                id: livros.length + 1,
                titulo: titulo,
                autorId: autorId,
                categoriaId: categoriaId,
                anoPublicacao: anoPublicacao,
                preco: preco
            };
            LivroModel.criar(novoLivro);
            res.status(201).json({msg: "Livro criado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({msg: "Erro ao criar o livro", erro: error.message});
        }
    }

}