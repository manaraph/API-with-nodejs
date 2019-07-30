import boom from 'boom';
import Car from '../models/Car';

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.getSingleCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    return car;
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.addCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    return car.save();
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = req.body;
    const { ...updateData } = car;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (error) {
    throw boom.boomify(error);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (error) {
    throw boom.boomify(error);
  }
};
