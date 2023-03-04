import express from 'express';


const port = 8000;
const app = express();


app.all('/hello', (req, res, next) => {
    console.log("All");
    next();
})
app.route('/user')
    .get('/hello', (req, res) => {
        res.send('Привет,  это ГЕТ')
    })
    .post('/hello', (req, res) => {
        res.send('Привет,  это ПОСТ')
    })

app.get('/hello', (req, res) => {
    res.send('Привет!');
})


app.listen(port, () => {
    console.log(`Сервер запущен на Локалхост:${port}`);
})

