require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
