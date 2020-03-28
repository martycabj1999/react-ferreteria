import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Product from '../../productsByCategory/components/Product';
import '../../listProducts/styles/ListProducts.css';
import Error from '../../../../layouts/Error';
import ProductProvider from '../../providers/ProductProvider';
import CategoryProvider from '../../../categories/providers/CategoryProvider';

const ProductsByCategory = (props) => {

  const messages = useSelector(state => state.languages.messages);
  // Obtener el id de la categoria desde la url
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    async function fetchData() {
      const categoryId = (window.location.pathname).split('/')[2];
      ProductProvider.getProductsByCategoryId(categoryId).subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data);
        }
      });
      CategoryProvider.getCategoryById(categoryId).subscribe(({ status, data }) => {
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
      <h4>{messages['product_category_products']}: {category.name}</h4>
      <Container>
        {products.length > 0 ? listProducts : <Error mensaje={messages['product_category_not_products']} />}
      </Container>
    </div>
  );
}

export default ProductsByCategory;