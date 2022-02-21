import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

//mongooose setup
app.connect(`mongodb://localhost:4000/productsdb`, useNewUrlParser, useUnifiedTopology)

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
