'use strict'

module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const PostSchema = new Schema(
    {
      title: { type: String, unique: true, required: true, index: true },
      imgUrl: { type: String },
      content: { type: String },
      text: { type: String },
      watch: { type: Number, default: 0 },
      author: { type: String, default: '蚊子' },
      createTime: { type: Date },
      classifyId: { type: String },
      classifyData: { type: Object },
      prevData: { type: Array },
      nextData: { type: Array }
    },
    {
      versionKey: false
    }
  )

  return mongoose.model('Post', PostSchema)
}
