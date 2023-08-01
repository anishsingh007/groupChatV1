//nodejs Core MOdule pathh
const path = require('path')

///installed modules
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const fileUpload = require('express-fileupload')

//util folder db
//const sequelize = require('./util/database')

//models


//importin routes 
const homepageRoutes =require('./routes/homepage')
// const userRoutes = require('./routes/user');
// const groupRoutes = require('./routes/group');
// const adminroutes = require('./routes/admin');
//controllers

const app = express();

//middlewares
app.use(cors({origin:'*'}));
app.use(bodyParser.json({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use(fileUpload({
    createParentPath:true,
    limits:{fileSize:5*1024*1024},
    abortOnLimit:true
})) 

app.use(homepageRoutes)



// Start the server
// sequelize.sync()
// .then((result) => {
   
// })
// .catch((err) => console.log(err));

app.listen(process.env.PORT || 3000, () => console.log('SERVER STARTED'));