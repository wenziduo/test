'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ClassifySchema = new Schema(
    {
      title: { type: String, unique: true, required: true, index: true },
    },
    {
      versionKey: false,
    }
  );

  return mongoose.model('Classify', ClassifySchema);
};
