const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//set up js and css extensions
app.use('*/js',express.static('public/js'));
//set up js extensions
app.use('*/css',express.static('public/css'));
//index.html is landing page
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})
//description page
app.get('/description', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/description.html'))
})

//localhost:3000
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});