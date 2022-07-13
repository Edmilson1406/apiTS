import express, {Request, Response} from 'express';
import { userRoutes } from './routes';
const PORT = process.env.PORT || 8091;
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())
userRoutes(app)
app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: "Okay"
    })
})

app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT))