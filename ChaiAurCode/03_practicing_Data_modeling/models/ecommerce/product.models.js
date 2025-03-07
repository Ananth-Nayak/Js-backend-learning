import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default:0,
    },
    productImage: {
      type: String,
    },
    stock:{
      type:Number,
      default:0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
