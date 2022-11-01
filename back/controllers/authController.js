const User = require("../models/auth")
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const { TokenExpiredError } = require("jsonwebtoken");
const tokenEnviado = require("../utils/jwtToken");

//Registrar un nuevo usuario /api//usuario/registrar

exports.registroUsuario=catchAsyncErrors(async(req, res, next)=>{
    const {nombre, email, password} =req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id: "20191110",
            url: "https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        }
    })
    const token = user.getJwtToken();
    tokenEnviado(user, 201,res)
    })


//Iniciar sesion
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const {email, password} = req.body;

    //revisar si los campos estan completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email & contraseña, no te cuesta nada :)", 400))
    }

    //Buscar al usuario en la base de datos
    const user = await User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Email o contraseña inválidos", 401))
    }

    //Chequear la contraseña
    const contraseñaOK= await user.compararPass(password);

    if(!contraseñaOK){
        return next(new ErrorHandler("Contraseña inválida", 401))
    }
    tokenEnviado(user, 200,res)
})