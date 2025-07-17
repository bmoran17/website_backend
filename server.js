const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
 
const app1 = require('./routes/app1.js');
const app2 = require('./routes/app2.js');
const app3 = require('./routes/app3.js')


app.use("/projects", app1, app2, app3);

app.get('/route1', (req, res) => {
  res.json({ message: 'Hello 1!' });
});

app.get('/route2', (req, res) => {
  res.json({ message: 'Hello 2!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
