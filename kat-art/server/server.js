const express = require("express"); // framework for API
const cors = require("cors"); // security feature to handle domains
const db = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // middleware to handle security
app.use(express.json()); // middleware to parse JSON in request body

// connect to mongo
// mongoose.connect('mongodb://localhost/my-ecommerce-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// connect to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// handle errors
app.use((err, req, res, next) => {
  console.error(arr.stack);
  res.status(500).send("Domething went wrong!");
});
