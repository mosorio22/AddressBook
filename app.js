const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('*/js',express.static('public/js'));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});