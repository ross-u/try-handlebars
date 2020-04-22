const express = require('express');

const app = express();
const PORT = 3000;


// SET THE VIEW ENGINE
// Set HBS as the view engine used for rendering HTML views
app.set('view engine', 'hbs');

// Set the folder containing the template `hbs` files
app.set('views', __dirname + '/views');


// MIDDLEWARE


// ROUTES
app.get('/', (req, res)=> {
  // res.send('Hello there');  // Returns string
  // res.sendFile(__dirname + FILE_LOCATION);  // Returns a loaded file

  res.render('index');
})


// START SERVER
app.listen(PORT, ()=> {
  console.log(`Server running at port ${PORT}`);
})