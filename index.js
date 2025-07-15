import express from 'express';
import cors from 'cors';
import TaskRouter from './router/task-router.js';
import client from './database/redis.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.use(async (req,res,next)=>{
    const ip = req.ip;
    const limite = await client.get(ip);
    if(!limite){
        await client.set(ip, 1,{
            EX: 60
        });
    }
    if(limite > 5){
        res.status(429).json({
            error: "Limite de requisições atingido"
        });
        return;
    }
    await client.incr(ip);
    next();
});

// app.use('/tasks', TaskRouter);

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
});