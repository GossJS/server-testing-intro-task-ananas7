import express from 'express';
import url from 'url';
import moment from 'moment';

const app = express();

function calcLength(str) {
    const query = url.parse(str).query;
    return (query ? query.length : 0).toString();
}

app.use((req, res, next) => {
    res.header('myname', 'Ilya Lomtev');
    res.header('Content-Type', 'text/plain; charset=utf-8');
    next();
});

app.get('/time', (req, res) => {
    const dateTime = moment().format('DD-MM-YY HH:mm');
    res.end(dateTime);
});

app.get('/author', (req, res) => {
    res.end("Ломтев Илья");
});


app.get('/length', (req, res) => {
    res.end(calcLength(req.url));
});

app.listen(3000, () => {
    console.log('THIS IS SERVEEEER!');
});

export {
    calcLength
};
