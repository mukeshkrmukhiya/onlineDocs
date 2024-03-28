const mongoose = require('mongoose');
const connectDB = require('./db');

// Define your schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: ''
    },
    startAt: {
        type: Date,
        required: true
    },
    endAt: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    }
}, {
    timestamps: true // Add createdAt and updatedAt fields
});

// Connect to MongoDB
connectDB();

// Create a Mongoose model based on the schema
let Todo;
try {
    // Try to retrieve the existing model
    Todo = mongoose.model('Todo');
} catch {
    // If the model doesn't exist, create it
    Todo = mongoose.model('Todo', todoSchema);
}

// Export the model
module.exports = Todo;
