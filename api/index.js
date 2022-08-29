const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { preloadTypes, preloadCategories } = require('./src/preloadDb/preloadFunctions')
require('dotenv').config();

const PORT = process.env.PORT;

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  server.listen(PORT, () => {
    console.log("%s listening at " + PORT);
  });
  try {
    await preloadTypes();
    await preloadCategories();
    console.log('Preload done!')
  } catch (error) {
    console.log(error)
  }
});