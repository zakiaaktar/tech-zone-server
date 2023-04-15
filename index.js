const express = require('express')
const cors = require('cors');


const app = express();
const port = process.env.PORT || 4000;


// middle wares
app.use(cors());
app.use(express.json());





app.get('/', (req, res) => {
    res.send('Tech Zone server is running');
});

app.listen(port, () => {
    console.log(`Tech Zone server running on ${port}`);
})