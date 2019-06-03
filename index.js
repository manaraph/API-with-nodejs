require('dotenv').config()
const hapi = require('hapi');
const mongoose = require('mongoose');
const Painting = require('./models/Painting')
const schema =  require('./graphql/schema')
const {graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');

//Set up hapi server
const server = hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
});


// Get mongo credential from .env file. Create your database, username and password and set the mongoDB URI variable in .env file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
        console.log('Successfully connected to database')
    }).catch(error => {
        console.error('Error connecting to MongoDB database', error)
    })

// mongoose.connection.once('open', ()=>{
//     console.log('Connected to database');
    
// })


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
                return painting.save();
            }
        }
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);    

    await server. register({
        plugin: graphiqlHapi,
        options: {
            path: '/graphiql',
            graphiqlOptions: {
                endpointURL: '/graphql'
            },
            route: {
                cors: true
            }
        }
    }),
    await server.register({
        plugin: graphqlHapi,
        options: {
            path: '/graphql',
            graphiqlOptions: {
                schema
            },
            route: {
                cors: true
            }
        },

    })
};

// const init2 = async() =>{
    // await server. register({
    //     plugin: graphiqlHapi,
    //     options: {
    //         path: '/graphiql',
    //         graphiqlOptions: {
    //             endpointURL: '/graphql'
    //         },
    //         route: {
    //             cors: true
    //         }
    //     }
    // }),
    // await server.register({
    //     plugin: graphqlHapi,
    //     options: {
    //         path: '/graphql',
    //         graphiqlOptions: {
    //             schema
    //         },
    //         route: {
    //             cors: true
    //         }
    //     },

    // })
// }

init();
