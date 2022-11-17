const {Schema, model} = require('mongoose');

const FolioSchema = Schema({

    numFolio: {
        type: Intl,
        // required: true
    },
    numFolioAA: {
        type: Intl,
        // required: true
    },
    numFolioMB: {
        type: Intl,
        // required: true
    },
    numFolioEL: {
        type: Intl,
        // required: true
    },
    numFolioVE: {
        type: Intl,
        // required: true
    }
});

FolioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Folio', FolioSchema);