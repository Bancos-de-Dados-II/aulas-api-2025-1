import mongoose from '../database/mongo.js';

const taskSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    dataHora: Date,
    tipo:{
        type: String,
        enum: ['Pessoal', 'Profissional'],
        required: true
    },
    local: {
        type: {
            type: String,
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

taskSchema.index({
    titulo: 'text',
    descricao: 'text'
},{
    default_language: 'portuguese',
    weights:{
        titulo: 2,
        descricao: 1
    }
});
const Task = mongoose.model('Task', taskSchema);

export default Task;