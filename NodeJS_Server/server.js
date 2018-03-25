const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/authen', (req, res) => {
    // console.log(JSON.stringify(req.body));
    res.send('OK');
});

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`);
});