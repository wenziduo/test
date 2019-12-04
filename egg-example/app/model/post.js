'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PostSchema = new Schema(
    {
      title: { type: String, unique: true, required: true, index: true },
      content: { type: String },
      text: { type: String },
      watch: { type: Number, default: 0 },
      author: { type: String, default: '蚊子' },
      createTime: { type: Date },
      classifyId: { type: String },
      classifyData: { type: Object },
    },
    {
      versionKey: false,
    }
  );

  return mongoose.model('Post', PostSchema);
};
