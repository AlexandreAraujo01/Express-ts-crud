import express, { Request, Response } from 'express'; 
import { jogosRouter } from './http/routes/jogos-router';


const app = express();
app.use(express.json())


app.use('/api', jogosRouter)

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send("Ok")
});


app.listen(3000, () => {
  console.log(`listen on port: 3000`)
})