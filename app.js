const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorcontroller=require('./controller/404erroewr')


//This line sets the view engine to EJS. The view engine is used to render HTML templates.
app.set('view engine', 'ejs');


// This line sets the views directory to views. The views directory is where the EJS templates are stored.
app.set('views', 'views');

//importing       module.export=router
const adiminroute = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// This line registers the body-parser middleware for parsing HTTP request bodies. The body-parser middleware can be used to parse request bodies that are encoded in the application/x-www-form-urlencoded format.
app.use(bodyParser.urlencoded({ extended: false }));

// This line registers the express.static middleware for serving static files. The express.static middleware can be used to serve static files from the public directory.
app.use(express.static(path.join(__dirname, 'public')));

// This line registers the adminroute middleware for the /admin path. The adminroute middleware will handle requests to the /admin path.
app.use('/admin', adiminroute);//////////////////////

// This line registers the shopRoutes middleware for all paths. The shopRoutes middleware will handle requests to all paths that are not handled by other middleware.
app.use(shopRoutes);

// This line registers a middleware that will handle 404 errors. The middleware will render a 404 page if a request is made to a path that does not exist.
app.use(errorcontroller.get404error);

app.listen(3000);
