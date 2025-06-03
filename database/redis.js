import { createClient } from 'redis';

const client = createClient({
    url: 'redis://default:redis@localhost:6379'
});
client.on('error', err => console.log('Redis Client Error', err));

conectar();

async function conectar(){
    await client.connect();
    console.log('Conectado ao Redis');
}

export default client;