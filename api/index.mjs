import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;
app.use(cors());

const build = {
  "result": {
    "breakingNews": true,
    "articles": [
      {
        "name": "Kate Middleton did this"
      },
      {
        "name": "The Queen did this"
      },
      {
        "name": "Prince Harry did this"
      },
      {
        "name": "Meghan Markle did this"
      }
    ]
  }
};

const client = {
  "result": {
    "breakingNews": false,
    "articles": [
      {
        "name": "Kate Middleton did this"
      },
      {
        "name": "The Queen did this"
      },
      {
        "name": "Prince Harry did this"
      },
      {
        "name": "Meghan Markle did this"
      }
    ]
  }
};


app.get('/build', (req, res) => {
  console.log('/build req');
  res.json(build);
});

app.get('/client', (req, res) => {
  console.log('/client req');
	res.json(client);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})