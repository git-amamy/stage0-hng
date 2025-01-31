const express = require('express');
const cors = require('cors');

// EXPRESS OBJECT
const app = express();
app.use(cors());
app.use(express.json());

// PORT INITIATION
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Node js Server has started on: ${PORT}`)
})

// GET METHOD ROUTE
app.get('/', (req, res) => {
res.status(200).json({
    email: "pereamy93@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/git-amamy/stage0-hng.git"
})
})
