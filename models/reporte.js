const {Schema, model} = require('mongoose');

const ReporteSchema = Schema({

    fecha: {
        type: String,
        required: true
    },
    area_solicitante: {
        type: String,
        required: true,
    },
    urlImagen: {
        type: String,
        required: true,
    },
    responsable_servicio: {
        type: String,
        required: true,
    },
    folio: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    tipoServicio: {
        type: String,
        required: true,
    },
    eliminado: {
        type: Boolean,
        required: true,
    },
    estado: {
        type: Intl,
        required: true,
    },
}, {
    timestamps: true
});

ReporteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Reporte', ReporteSchema);