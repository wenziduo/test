'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ClassifySchema = new Schema(
    {
      title: { type: String, unique: true, required: true, index: true },
      count: { type: Number, default: 0 },
      imgUrl: {
        type: String,
        default:
          'http://img.taopic.com/uploads/allimg/130622/240373-13062210230694.jpg',
      },
    },
    {
      versionKey: false,
    }
  );

  return mongoose.model('Classify', ClassifySchema);
};
