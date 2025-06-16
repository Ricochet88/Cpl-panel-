```js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const leads = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  leads.push({ name, email });
  res.send('Lead captured successfully!');
});

app.get('/admin', (req, res) => {
  let list = '<h1>Leads</h1><ul>';
  leads.forEach(lead => {
    list += `<li>lead.name -{lead.email}</li>`;
  });
  list += '</ul>';
  res.send(list);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---
