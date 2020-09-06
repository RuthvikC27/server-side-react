import 'babel-polyfill';

import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore'
import reducers from './client/reducers'


const app = express();


app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    // Some logic to initialize
    // and load data into the store

    res.send(renderer(req, store));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('App listening on http://localhost:' + PORT);
});