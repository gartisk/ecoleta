import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');

    response.json([
        "Guilherme"
    ]);
});

app.listen(3333);