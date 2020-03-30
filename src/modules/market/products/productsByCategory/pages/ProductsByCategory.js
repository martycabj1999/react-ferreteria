import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Product from '../../../products/listProducts/components/Product';
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
    <Product
      key={product.id}
      product={product}
    />
  );

  return (
      <Container>
        <h4 className="mt-3 mb-3">{messages['product_category_products']}: {category.name}</h4>
        <Row>
          {products.length > 0 ? listProducts : <Error mensaje={messages['product_category_not_products']} />}
        </Row>
      </Container>
  );
}

export default ProductsByCategory;