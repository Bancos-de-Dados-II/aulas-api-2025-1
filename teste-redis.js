import { createClient } from 'redis';

const client = createClient({
    url: 'redis://default:redis@localhost:6379'
});
client.on('error', err => console.log('Redis Client Error', err));

testar();

async function testar(){
    await client.connect();
    await client.set('joaoPaulo', 'Faz a boa',{
        EX: 60
    });
    console.log('A boa foi feita');
}