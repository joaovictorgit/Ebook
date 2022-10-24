import jwt, { Secret } from 'jsonwebtoken';
const secret_key:Secret = 'ebook';

function autentificacao(req: any, res: any, next: any){
    const authHeader = req.headers.authorization
    if (!authHeader){
        return res.status(400).json('Não tem token')
    }
    const token = authHeader.replace('Bearer', '').trim()
    jwt.verify(token, secret_key,(err: any, decoded: any) => {
        if (err){
            return res.status(400).json('Token inválido ou expirado')
        }
        req.userId = decoded.id_usuario
        return next()
    })

}

export default autentificacao