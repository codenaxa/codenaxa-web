import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// No global warn here to avoid cluttering client console if imported there

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (!MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
        };

        const maskedUri = MONGODB_URI.replace(/\/\/.*@/, "//****:****@");
        console.log(`Attempting to connect to MongoDB: ${maskedUri}`);

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log('Successfully connected to MongoDB Atlas');
            return mongoose;
        }).catch(err => {
            console.error('MongoDB initial connection error:', err.message);
            cached.promise = null;
            throw err;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
