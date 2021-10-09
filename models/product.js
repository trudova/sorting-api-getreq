const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name must be providet"],
    },
    price: {
      type: Number,
      required: [true, "product price must be providet"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    raiting: {
      type: Number,
      default: 4.5,
    },
    company: {
      type: String,
      enum: {
        values: ["ikea", "liddy", "caressa", "marcos"],
        message:'{VALUE} is not supported'
      },
      //    enum:['ikea', 'liddy', 'caressa','marcos'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);