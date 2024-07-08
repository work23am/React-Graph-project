const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    label: String,
    values: [{ label: String, value: Number }],
});

module.exports = mongoose.model('Data', DataSchema);
