const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

exports.criarUsuario = async (reg,res) =>{

    const {email,senha} = req.body
    //Aplicativo do prisma
    const usuario = await prisma.usuario.create({data: {email,senha}})
    res.status(201).json(usuario)
}

exports.login = async (req,res)=>{
    const {email,senha}= req.body
    const usuario = await prisma.usuario.findFirst({where: {email,senha}})

    if(!usuario){
        return res.status(401).json({mensagem: "Login invalido!"})
}
res.json({ususarioId: usuario.id})
}


