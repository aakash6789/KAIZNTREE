import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const tagValues = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'];

const itemSchema = new mongoose.Schema({
    SKU: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    tags: {
        type: [{
            type: String,
            enum: tagValues // Specify the enum values here
        }],
    },
    inStock: {
        type: Number,
        require: true
    },
    availableStock: {
        type: Number,
        require: true
    }
});

const Category = mongoose.model('Category', categorySchema);
const Item = mongoose.model('Item', itemSchema);

export { Item,Category};