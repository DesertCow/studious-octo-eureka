const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');
const { config } = require('dotenv');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers'));

// Enable Routes
// app.use(routes);


//! =========================== Main Functions ==========================

async function startLocalServer() {
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`💡     Database Connection:  \x1b[32mOnline\x1b[0m     💡`);
      // console.log(`${activity}`);
      console.log(`🚀  Live API: \x1b[34mhttp://localhost:${PORT}/api\x1b[0m 🚀\n\n`);
    });
  });
}
//! ==========================Handlebar Partials Functions ==============//

// app.post('/api/surfboards/', (req, res) => {


// })




//!========================= Init =========================



//!========================= Main =========================

startLocalServer();