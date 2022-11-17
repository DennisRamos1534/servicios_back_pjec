const { response } = require('express');
const Reporte = require('../models/reporte');
const Folio = require('../models/folio');

const crearReporte = async (req, res = response) => {

    try {

        const reporteCreado = new Reporte(req.body);
        await reporteCreado.save();
        res.json({
            ok: true,
            reporte: [
                reporteCreado
            ],
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const allReportes = async (req, res = response) => {

    try {
        const reportes = await Reporte.find({estado: 1});
        reportes.reverse();

        res.json({
            ok: true,
            reportes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const allProcesos = async (req, res = response) => {

    try {
        const reportes = await Reporte.find({estado: 2});
        reportes.reverse();

        res.json({
            ok: true,
            reportes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const reportesCompletados = async (req, res = response) => {

    try {
        const reportes = await Reporte.find({estado: 3});
        reportes.reverse();

        res.json({
            ok: true,
            reportes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const filtrarReporte = async (req, res = response) => {

    try {
        const reporte = await Reporte.find({eliminado: false});
        reporte.reverse();

        res.json({
            ok: true,
            reporte
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const obtenerFolio = async (req, res = response) => {

    try {
        const getFolio = await Folio.find();
  
        res.json({
            folio: getFolio[0].numFolio
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const obtenerFolioAA = async (req, res = response) => {

    try {
        const getFolio = await Folio.find();
  
        res.json({
            folio: getFolio[0].numFolioAA
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const obtenerFolioMB = async (req, res = response) => {

    try {
        const getFolio = await Folio.find();
  
        res.json({
            folio: getFolio[0].numFolioMB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const obtenerFolioEL = async (req, res = response) => {

    try {
        const getFolio = await Folio.find();
  
        res.json({
            folio: getFolio[0].numFolioEL
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const obtenerFolioVE = async (req, res = response) => {

    try {
        const getFolio = await Folio.find();
  
        res.json({
            folio: getFolio[0].numFolioVE
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const crearFolio = async (req, res = response) => {

    try {
        // const crearFolio = await Folio.find();
        const crearFolio = new Folio({numFolio: 0}, {numFolioAA: 0},{ numFolioMB: 0},{ numFolioEL: 0}, {numFolioVE: 0});
        await crearFolio.save();
        res.json({
            crearFolio
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

// const crearFolioAA = async (req, res = response) => {

//     try {
//         // const crearFolio = await Folio.find();
//         const crearFolio = new Folio({numFolio: 0});
//         await crearFolio.save();
//         res.json({
//             crearFolio
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Hable con el administrador'
//         });
//     }
// }

const actualizarFolio = async (req, res = response) => {

    try {
        const {id} = req.params;
        const getFolio = await Folio.find({_id: id});
        let incremento = getFolio[0].numFolio + 1;
        const actualizarFolio = await Folio.findByIdAndUpdate(id, {numFolio: incremento});
    res.json({
        ok: true,
        actualizarFolio
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarFolioAA = async (req, res = response) => {

    try {
        const {id} = req.params;
        const getFolio = await Folio.find({_id: id});
        let incremento = getFolio[0].numFolioAA + 1;
        const actualizarFolio = await Folio.findByIdAndUpdate(id, {numFolioAA: incremento});
    res.json({
        ok: true,
        actualizarFolio
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarFolioMB = async (req, res = response) => {

    try {
        const {id} = req.params;
        const getFolio = await Folio.find({_id: id});
        let incremento = getFolio[0].numFolioMB + 1;
        const actualizarFolio = await Folio.findByIdAndUpdate(id, {numFolioMB: incremento});
    res.json({
        ok: true,
        actualizarFolio
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarFolioEL = async (req, res = response) => {

    try {
        const {id} = req.params;
        const getFolio = await Folio.find({_id: id});
        let incremento = getFolio[0].numFolioEL + 1;
        const actualizarFolio = await Folio.findByIdAndUpdate(id, {numFolioEL: incremento});
    res.json({
        ok: true,
        actualizarFolio
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarFolioVE = async (req, res = response) => {

    try {
        const {id} = req.params;
        const getFolio = await Folio.find({_id: id});
        let incremento = getFolio[0].numFolioVE + 1;
        const actualizarFolio = await Folio.findByIdAndUpdate(id, {numFolioVE: incremento});
    res.json({
        ok: true,
        actualizarFolio
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const deleteAllReporte = async (req, res = response) => {
    
    const reporte = await Reporte.findByIdAndDelete();
    res.json({'ok': 'Se borraron todos los reportes'});   
}

const deleteReporte = async (req, res = response) => {
    
    const {id} = req.params;
    const reporte = await Reporte.findByIdAndUpdate(id, {eliminado: true});
    res.json({reporte});
    
}

const deleteReporteFolio = async (req, res = response) => {
    
    // const {id} = req.params;
    const {folio} = req.body;
    const reporte = await Reporte.findByIdAndUpdate(folio, {eliminado: 4});
    res.json({reporte});
}

const deleteReporteFolioPruebas = async (req, res = response) => {
    
    // const {id} = req.params;
    const {folio} = req.body;
    const reporte = await Reporte.findOneAndDelete({folio});
    res.json({reporte});
}

const actualizarEstado = async (req, res = response) => {
    
    const {id} = req.params;
    const reporte = await Reporte.findByIdAndUpdate(id, {estado: 2});
    res.json({
        ok: true,
        reporte
    });
}

const actualizarEstadoTerminado = async (req, res = response) => {
    
    const {id} = req.params;
    const reporte = await Reporte.findByIdAndUpdate(id, {estado: 3});
    res.json({
        ok: true,
        reporte
    });
    
}

module.exports = {
    crearReporte,
    allReportes,
    allProcesos,
    filtrarReporte,
    obtenerFolio,
    obtenerFolioAA,
    obtenerFolioMB,
    obtenerFolioEL,
    obtenerFolioVE,
    crearFolio,
    actualizarFolio,
    actualizarFolioAA,
    actualizarFolioMB,
    actualizarFolioEL,
    actualizarFolioVE,
    deleteAllReporte,
    deleteReporte,
    deleteReporteFolio,
    deleteReporteFolioPruebas,
    actualizarEstado,
    reportesCompletados,
    actualizarEstadoTerminado
}