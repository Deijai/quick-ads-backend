import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: true}));

app.use((request: Request, response: Response) => {
    response.status(404);
    response.json({'error': 'endpoint not found'});
})

app.listen(process.env.PORT);