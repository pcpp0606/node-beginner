import express from 'express'
// import 'dotenv/config'
import { SERVER_PORT } from '../constants/env.constant';

const app = express();
// const port = 3000
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    return res.json('hello1111');
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on ${SERVER_PORT}`);
})