import boom from 'boom';
import Owner from '../models/Owner';
import Car from '../models/Car';

exports.getOwner = async () => {
  try {
    const owners = await Owner.find();
    return owners;
  } catch (error) {
    throw boom.boomify(error);
  }
};