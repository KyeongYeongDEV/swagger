const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger-output.json");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send("main");
});

app.listen(port, () => {
    console.log(`Port= ${port}, Server start`);
});
