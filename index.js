const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())


// ------ Data ------ //

const chefs = require('./data/chefs.json')


// ------ Data ------ //

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chef/:chefId', (req, res) => {
    const chefId = req.params.chefId;
    const chefDetails = chefs.find(chef => chef._id === chefId)
    res.send(chefDetails);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});