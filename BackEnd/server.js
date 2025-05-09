import express from 'express';
import dotenv from 'dotenv';
import { PGSQL } from './config/db.js';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import favoritesRoute from './routes/favoritesRoute.js';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 2103 ;

async function connectDB() {
    try {
        // await PGSQL `CREATE TABLE IF NOT EXISTS Product (id SERIAL PRIMARY KEY, name VARCHAR(100), price NUMERIC)`;
        // await PGSQL `CREATE TABLE IF NOT EXISTS Client (user_id SERIAL PRIMARY KEY, user_name VARCHAR(100), email VARCHAR(100), password VARCHAR(100))`;
        // await PGSQL ` CREATE TABLE IF NOT EXISTS Wish_list (  user_id INT, product_id INT,PRIMARY KEY (user_id, product_id),
        //             FOREIGN KEY (user_id) REFERENCES Client(user_id),FOREIGN KEY (product_id) REFERENCES Product(product_id)) `;
        // await PGSQL `CREATE TABLE IF NOT EXISTS Cart (user_id INT, product_id INT,PRIMARY KEY (user_id, product_id),
        //             FOREIGN KEY (user_id) REFERENCES Client(user_id),FOREIGN KEY (product_id) REFERENCES Product(product_id))`;
        await PGSQL `SELECT 1`;
    } catch (error) {
    }
}

connectDB().then(() => {
    console.log("Database connection established successfully.");
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});
console.log(process.env);
console.log("kulchi khdam");
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});

app.use('/products', productRoute);
app.use('/cart',cartRoute);
app.use('/favorites',favoritesRoute);
