import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//Conectando ao MongoDB
main();
async function main() {
    await mongoose.connect(process.env.ATLAS_URL);
    console.log('Conectado ao MongoDB');
}

export default mongoose;