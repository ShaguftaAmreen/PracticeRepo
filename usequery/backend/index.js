import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
// app.use(express.json({ limit: '10mb' })); // Increase limit if necessary

app.get('/api/products', (req, res) => {
  
  const products = [
    { id: 1, name: 'Alice', age: 23 },
    { id: 2, name: 'Aliya', age: 23 },
    { id: 3, name: 'Alim', age: 23 },
    { id: 4, name: 'Alina', age: 23 },
    { id: 5, name: 'Alisha', age: 23 },
  ];

  res.send(products);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
