import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../listProducts/components/Product';
import '../../listProducts/styles/ListProducts.css';
import Error from '../../../../layouts/Error';
import ProductService from '../../providers/ProductProvider';
import CategoryService from '../../../categories/providers/CategoryProvider';

const ProductsByCategory = (props) => {

  // Obtener el id de la categoria desde la url
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    async function fetchData() {
      const categoryId = (window.location.pathname).split('/')[2];
      ProductService.getProductsByCategoryId(categoryId).subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data);
        }
      });
      CategoryService.getCategoryById(categoryId).subscribe(({ status, data }) => {
        if (status === 200) {
          setCategory(data);
        }
      });
    }
    fetchData();
  }, [props.location.pathname, setProducts, setCategory]);

  const listProducts = products.map((product) =>
    <div
      key={product.id}
      className='product'>
      <Product
        product={product}
      />
    </div>
  );

  return (
    <div className="list-products-container">
      <h4>Productos de la categoria: {category.name}</h4>
      <Container>
        {products.length > 0 ? listProducts : <Error mensaje="No hay productos para mostrar" />}
      </Container>
    </div>
  );
}

export default ProductsByCategory;