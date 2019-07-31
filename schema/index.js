import { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import carController from "../controllers/carController";
import ownerController from "../controllers/ownerController";
import serviceController from "../controllers/serviceController";

const carType = new GraphQLObjectType({
  name: 'Car',
  fields: () => ({})
});

const ownerType = new GraphQLObjectType({
  name: 'Owner',
  fields: () => ({})
});

const serviceType = new GraphQLObjectType({
  name: 'Service',
  fields: () => ({})
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    car: {},
    cars: {},
    owner: {},
    service: {}
  }
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addCar: {
      type: carType,
      args: {},
      async resolve(args) {
        return ''
      }
    },
    editCar: {
      type: carType,
      args: {},
      async resolve(args) {
        return ''
      }
    },
    deleteCar: {
      type: carType,
      args: {},
      async resolve(args) {
        return ''
      }
    },
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});