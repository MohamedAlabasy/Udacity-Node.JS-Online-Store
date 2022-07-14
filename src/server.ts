import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import cors from 'cors';


const app: express.Application = express()
// const address: string = "0.0.0.0:3000"

// app.use(bodyParser.json())

// app.get('/', function (req: Request, res: Response) {
//     res.send('Hello World!')
// })

app.listen(process.env.PORT || 8888, () => {
    console.log(`App Run to http://${process.env.HOST}:${process.env.PORT || 8888}`);
});
