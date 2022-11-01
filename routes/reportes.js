/**
 *     Path: api/reporte
 */

 const {Router} = require('express');
 const { check } = require('express-validator');
 const { crearReporte, allReportes, actualizarEstado, reportesCompletados, allProcesos, actualizarEstadoTerminado, deleteReporteFolio, deleteReporteFolioPruebas, deleteAllReporte, filtrarReporte, actualizarFolio, obtenerFolio, crearFolio } = require('../controllers/reportes');
 const { validarCampos } = require('../middlewares/validar-campos');
 
 const router = Router();
 
 
 router.post('/new', [
     check('fecha', 'La fecha es obligatoria').not().isEmpty(),
     check('area_solicitante', 'El area solicitante es obligatorio').not().isEmpty(),
     check('urlImagen', 'La url obligatoria').not().isEmpty(),
     check('responsable_servicio', 'El responsable del servicio es obligatorio').not().isEmpty(),
     check('folio', 'El folio es obligatorio').not().isEmpty(),
     check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
     check('tipoServicio', 'El tipo de servicio es obligatorio').not().isEmpty(),
     check('eliminado', 'El campo eliminado es obligatorio').not().isEmpty(),
     check('estado', 'El campo estado es obligatorio').not().isEmpty(),
     validarCampos
 ],crearReporte);

 router.get('/', allReportes);
 router.get('/procesoAll', allProcesos);
 router.get('/completado', reportesCompletados);

 router.post('/filtrado', filtrarReporte);

 router.get('/obtenerFolio', obtenerFolio);
 router.post('/crearFolio', crearFolio);
 router.put('/actualizarFolio/:id', actualizarFolio);

//  router.delete('/:id', [
//     check('id', 'No es un ID valido').isMongoId(),
//     validarCampos
//  ], deleteReporte);

 router.delete('/deleteAllReportes', deleteAllReporte);

 router.delete('/deleteFolioPuebas', [
    check('folio', 'El campo folio no debe de estar vacio').not().isEmpty(),
    validarCampos
 ], deleteReporteFolioPruebas);

 router.delete('/folio', [
    check('folio', 'El cambio folio no debe de estar vacio').not().isEmpty(),
    validarCampos
 ], deleteReporteFolio);

 router.put('/proceso/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
 ], actualizarEstado);

 router.put('/terminado/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
 ], actualizarEstadoTerminado);

 router.put('/completar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
 ], actualizarEstadoTerminado);
 
 
 module.exports = router;