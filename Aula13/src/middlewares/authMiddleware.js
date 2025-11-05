import jwt from "jsonwebtoken";

//Função middleware para proteger rotas
export function autenticarToken(req, res, next){
    //pegar o header  Authorization (formato esperado: "Bearer <token>")
    const autHeader = req.headers["authorization"];
    //Extrair o token do header (remove o "Bearer ")
    const token = autHeader && autHeader.split(" ")[1];
    // Se não houver toke, retorna erro 401 (não autorizado)
    if(!token){
        res.status(401).json({msg: "Acesso negado  - Token não fornecido"});
        return
    }
    try {
        //Verficar se o token é válido
        const usuario = jwt.verify(token, process.env.JWT_SECRET);
        //adiciona os dados do usuário à requisição
        req.usuario = usuario;
        //continua para a próxima função da rota
        next();
    } catch (error) {
        //Se o token for inválido ou experido, retorna erro 403(proibido)
        res.status(403).json({msg: "Erro interno na autorização", erro: error.message});
    }
}