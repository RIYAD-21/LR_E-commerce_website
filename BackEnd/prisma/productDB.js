import { PrismaClient } from '../generated/prisma/index.js';
import {barbie, xbox, iphone, nike,adidas, reebok, veste, pantalon, chemise, microwave, secheLinge, laveLinge, lego, ps5, carToy} from '../helpers/productImages.js';

const prisma = new PrismaClient();

const products = [{
    name: 'Manette PS5',
    categorie: 'electronics',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 100,
    image: `${ps5}`,
}, {
    name: 'Xbox 360',
    categorie: 'electronics',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 200,
    image: `${xbox}`,
},
{
    name: 'Iphone 14',
    categorie: 'electronics',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 3000,
    image: `${iphone}`,
},
{
    name: 'chaussures Nike',
    categorie: 'sport',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 1500,
    image: `${nike}`,
}, {
    name: 'Tenu sport Adidas',
    categorie: 'sport',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 1200,
    image: `${adidas}`,
},{
    name: 'Survetement Reebok',
    categorie: 'sport',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 1300,
    image: `${reebok}`,
}, {
    name: 'Veste en cuir',
    categorie: 'fashion',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 2500,
    image: `${veste}`,
}, {
    name: 'Pantalon Levi\'s',
    categorie: 'fashion',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 800,
    image: `${pantalon}`,
}, {
    name: 'Chemise Ralph Lauren',
    categorie: 'fashion',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 900,
    image: `${chemise}`,
}, {
    name: 'microwave Samsung',
    categorie: 'home',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 900,
    image: `${microwave}`,
},{
    name: 'Lave-linge LG',
    categorie: 'home',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 1200,
    image: `${laveLinge}`,
},{
    name: 'Sèche-linge Bosch',
    categorie: 'home',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 1500,
    image: `${secheLinge}`,
},{
    name: 'jouét Lego',
    categorie: 'toys',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 100,
    image: `${lego}`,
},{
    name: 'Poupée Barbie',
    categorie: 'toys',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 50,
    image: `${barbie}`,
},{
    name: 'Petite voiture télécommandée',
    categorie: 'toys',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 350,
    image: `${carToy}`,
}
];

async function main() {
    console.log("Seeding products...");
        for (const product of products) {
            await prisma.product.create({
                data: {
                    name: product.name,
                    categorie: product.categorie,
                    description: product.description,
                    price: product.price,
                    image_url: product.image
                }
            });
        }
    console.log("Products seeded successfully!");
    const allProducts = await prisma.product.findMany();
    console.log("All Products:", allProducts);
}

main()
  .then(async () => {
    console.log("Products seeded successfully!"); 
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
