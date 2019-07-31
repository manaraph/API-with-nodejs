import boom from 'boom';
import Car from '../models/Car';

exports.getCars = async () => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.getSingleCar = async req => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const car = await Car.findById(id);
    return car;
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.addCar = async req => {
  try {
    const car = new Car(req);
    const newCar = await car.save();
    return newCar;
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const updateData = req.params === undefined ? req : req.params;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (error) {
    throw boom.boomify(error);
  }
};
