import mongoose from "mongoose";

const categoryEnum = ['Bundels', 'Finished products', 'Raw materials'];


const itemSchema = new mongoose.Schema({
    SKU:{
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: statusEnum,
    },
    tags: {
        type: String,
        enum: statusEnum,
    },
    inStock:{
        type:Number,
        require:true
    },
    availableStock:{
        type:Number,
        require:true
    }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;