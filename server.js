const app = require("./app/app");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;

try {
  mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Mongoose db is connected!");
  });
} catch (error) {
    console.log("Mongoose db is not connected!")
}
app.listen(port, () => {
  console.log(`Server is running from http://localhost:${port}`);
});
