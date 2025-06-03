import { createClient } from 'redis';

const client = createClient({
    url: 'redis://default:redis@localhost:6379'
});
client.on('error', err => console.log('Redis Client Error', err));

testar();

async function testar(){
    await client.connect();
    const ping = await client.ping();
    console.log(ping);
}