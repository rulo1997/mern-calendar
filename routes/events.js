
/*
    Rutas de Usuarios / Auth
    host + /api/events
*/

const Router = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Todas tienen que pasar por la validacion del token
router.use( validarJWT ); //Cualquier peticion que venga despues, va a psar por el JWT


// Obtener eventos
router.get('/' , getEventos );

router.post(
    '/'
    , [
        check('title' , 'El title es obligatorio').not().isEmpty()
        ,check('start' , 'Fechas de inicio es obligatoria').custom( isDate )
        ,check('end' , 'Fechas de finalizacion es obligatoria').custom( isDate )
        ,validarCampos
    ]
    , crearEvento 
);

router.put('/:id' , actualizarEvento );

router.delete('/:id' , eliminarEvento );



module.exports = router;