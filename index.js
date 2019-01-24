const hapi = require('hapi');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:GijhSH3eR9XTp7k@ds211635.mlab.com:11635/node_api'); //This is just a DB

mongoose.connection.once('open', ()=>{
    console.log('Connected to database');
    
})


const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply){
            return `<h1>My modern api</h1?`
        }
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    
};

init();