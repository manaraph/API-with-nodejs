const graphql = require('graphql') 

const {GraphQLObjectType, GraphQLString} = graphql;
//  deconstructing objects => code above is same thing as
// const GraphQLObjectType = graphql.GraphQLObjectType
// const GraphQLString = graphql.GraphQLString

const PaintingType = new GraphQLObjectType({
    name: 'Painting',
    fields: () =>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        url: {type: GraphQLString},
        techniques: {type: GraphQLString},
    })
})

module.exports = PaintingType;