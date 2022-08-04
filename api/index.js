const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require('dotenv').config();

const PORT = process.env.PORT;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(PORT, () => {
    console.log("%s listening at " + PORT);
  });
});