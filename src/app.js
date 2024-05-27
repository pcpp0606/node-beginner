import express from 'express'
import 'dotenv/config'

const app = express();
// const port = 3000
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    return res.json('hello1111');
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})