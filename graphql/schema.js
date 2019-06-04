const graphql = require('graphql') 

const PaintingType = require('./PaintingTypes')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        painting: {
            type: PaintingType,
            args: { id: {type: GraphQLString }},
            resolve(parent, args){
                //Logic for serving data
                // painting(id: 20){
                //     name
                // }
            }
            
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})