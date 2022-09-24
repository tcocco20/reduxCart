import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products-slice";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
];

const Products = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    for (const product of DUMMY_PRODUCTS) {
      dispatch(productsActions.addProduct(product));
    }
  }, [dispatch]);

  const products = useSelector(state => state.products.products);

  const generateProducts = () => {
    return products.map(product => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    ));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{generateProducts()}</ul>
    </section>
  );
};

export default Products;
