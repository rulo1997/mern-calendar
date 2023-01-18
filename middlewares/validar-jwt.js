const { response } = require('express'); //Para tener ayuda con el response
const jwt = require('jsonwebtoken');

const validarJWT = ( req , res = response , next ) => {

    //x-token en los headers
    const token = req.header('x-token');

    if( !jwt ) {

        return res.status(401).json({
            ok: false
            ,msg: 'No hay token en la peticion'
        })

    }

    try {

        const { uid , name } = jwt.verify(
            token
            ,process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        
        console.log(error);
        return res.status(401).json({
            ok: false
            ,msg: 'Token no válido'
        })

    }

    next();

}

module.exports = {
    validarJWT
}
