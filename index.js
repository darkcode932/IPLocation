import bodyParser from 'body-parser';
import petitionRoutes from './routes/petition.js'

const express = require('express');
const geoip = require('geoip-lite');
const port = 5000;

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/register', require('./routes/registration.js'));
app.use('/api/petitons', petitionRoutes);

app.get('/api/location/:ip', (req, res) => {
  //Récupérer l'adresse IP de l'utilisateur à partir de la requête
  const ip = req.params.ip;
  //const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Utiliser geoip-lite pour récupérer les informations de géolocalisation de l'adresse IP
  const location = geoip.lookup(ip);

  console.log(location);

  // Renvoyer les informations de géolocalisation à l'utilisateur
  res.json(location);
});

app.listen(port, () => console.log(`API écoutant sur le port ${port}`));
