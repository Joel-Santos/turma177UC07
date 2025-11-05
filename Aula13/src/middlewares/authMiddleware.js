import jwt from "jsonwebtoken";


// Middleware para proteger rotas privadas
export function autenticarToken(req, res, next) {
    // O token deve vir no header: Authorization: Bearer <token>
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ erro: "Token não fornecido" });
    }

    try {
        // Verifica o token
        const usuario = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = usuario; // adiciona o usuário decodificado à requisição
        next();
    } catch (erro) {
        res.status(403).json({ erro: "Token inválido ou expirado" });
    }
}
