import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the CI/CD demo!"
    })
});

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
});