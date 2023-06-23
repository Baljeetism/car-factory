const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb+srv://car-kart:brazuca123@cluster0.ctnouaq.mongodb.net/carekart?retryWrites=true&w=majority');
    console.log('Mongo connected');

    const CarItem = mongoose.model('car_items', new mongoose.Schema({}));
    const fetchedData = await CarItem.find({});
    global.car_items=fetchedData;
    const CarCat = mongoose.model('car_category', new mongoose.Schema({}));
    const fetchData = await CarCat.find({});
    global.car_category=fetchData;
    

    
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
