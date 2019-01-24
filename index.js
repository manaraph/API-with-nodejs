const hapi = require('hapi');
const mongoose = require('mongoose');

//Set up hapi server
const server = hapi.server({
    port: 4000,
    host: 'localhost'
});


//This credential is not correct create your database on mlab and connect to yours
// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds357261.mlab.com:<yourport>/<yourdb>'); 
mongoose.connect('mongodb://admin:GijhSH3e89XTp7k@ds218635.mlab.com:17635/node_api'); //Modify to suite the DB you have created

mongoose.connection.once('open', ()=>{
    console.log('Connected to database');
    
})

const Painting = require('./models/Painting')
//Set up routes
const init = async () => {
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: function(request, reply){
                return `<h1>My modern api</h1?`
            }
        },
        {
            method: 'GET',
            path: '/api/v1/paintings',
            handler: (req, reply)=>{
                return Painting.find();
            }
        },
        {
            method: 'POST',
            path: '/api/v1/paintings',
            handler: (req, reply)=>{
                const{name, url, techniques} = req.payload;
                const painting = new Painting({
                    name,
                    url,
                    techniques
                })
                return Painting.save();
            }
        }
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    
};

init();
