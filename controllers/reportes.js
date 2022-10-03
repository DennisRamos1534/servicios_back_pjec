const { response } = require('express');
const Reporte = require('../models/reporte');

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
    
    // const {folio} = req.body;

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
    const reporte = await Reporte.findByIdAndUpdate(id, {estado: 4});
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
    deleteAllReporte,
    deleteReporte,
    deleteReporteFolio,
    deleteReporteFolioPruebas,
    actualizarEstado,
    reportesCompletados,
    actualizarEstadoTerminado
}