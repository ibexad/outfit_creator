require('dotenv').config();

const express = require('express');
const productsRouter = require("./routes/productRoutes");
const imagesRouter = require("./routes/imagesRoutes");
const outfitRoutes = require("./routes/outfitRoutes")

const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("../swagger.json");

const app = express();
const PORT = process.env.PORT || 3000; 

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use("/api/products", productsRouter);
app.use("/api/images", imagesRouter);
app.use("/api/outfit", outfitRoutes);

app.use('/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});