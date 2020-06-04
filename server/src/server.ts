import express from 'express';

const app = express();
app.use(express.json());

const users = [
    "Guilherme",
    "Sandro",
    "Gabriel",
    "Victor"
];

app.get('/users', (request, response) => {
    console.log('listagem de usuários');
    const search = String(request.query.search);
    console.log(search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    return response.json(users[Number(request.params.id)]);
});

app.post('/users', (request, response) => {
    console.log('listagem de usuários3');
    const data = request.body;
    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);