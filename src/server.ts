import express, { Request, Response } from 'express'; 
import { jogosRouter } from './http/routes/jogos-router';
import path from 'node:path';
import { pagesRouter } from './http/routes/pages-router';


const app = express();
app.use(express.json())
app.use('/api', jogosRouter)

app.use('/', pagesRouter)

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send("Ok")
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(3000, () => {
  console.log(`listen on port: 3000`)
})