import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart className="cartContainer" />
      </div>
    </div>
  );
};

export default Home;

