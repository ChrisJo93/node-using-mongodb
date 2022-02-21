import mongoose from 'mongoose'
import productSchema from '../models/model'

const Product = mongoose.model('Product', productSchema)

const newProduct = new Product(req.body)

newProduct(err, Product)