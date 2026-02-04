const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const prisma = new PrismaClient()

exports.criarUsuario = async (reg,res) =>{

    const {email,senha} = req.body
    
    const hashSenha = await bcrypt.hash(senha,8)
    //Aplicativo do prisma
    const usuario = await prisma.usuario.create({data: {email,senha:hashSenha}})
    res.status(201).json(id: usuario.id, email: usuario.email)
}

exports.login = async (req,res)=>{
    const {email,senha}= req.body
    const usuario = await prisma.usuario.findFirst({where: {email,senha}})

    if(!usuario){
        return res.status(401).json({mensagem: "Login invalido!"})
}
res.json({ususarioId: usuario.id})
}


