import { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Electronics from "./components/Categories/Electronics";
import Clothes from "./components/Categories/Clothes";
import Foods from "./components/Categories/Foods";
import Cart from "./components/Cart";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [basketData, setBasketData] = useState({});

  const fetchProducts = async () => {
    const {data: products} = await commerce.products.list();
    const {data: categoriesData} = await commerce.categories.list();
    const productsPerCategory = categoriesData.reduce((acc, category) =>{
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);
    setCategories(productsPerCategory);
  };

  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasketData(response.cart);
  };

  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setBasketData(response.cart);
  };

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty();
    setBasketData(response.cart);
  };

  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setBasketData(response.cart);
  };

  

  useEffect(() => {
    fetchProducts();
    fetchBasketData();
  }, []);

  return (
    <Router>
      <div>
        <CssBaseline />
        <NavBar
          basketItems={basketData.total_items}
          totalCost={
            (basketData.subtotal &&
              basketData.subtotal.formatted_with_symbol) ||
            "00.00"
          }
        />
        <Switch>
          <Route exact path="/">
            <Products categories={categories} addProduct={addProduct} />
          </Route>
          <Route exact path="/categories/electronics">
            <Electronics categories={categories} addProduct={addProduct} />
          </Route>
          <Route exact path="/categories/clothes">
            <Clothes categories={categories} addProduct={addProduct} />
          </Route>
          <Route exact path="/categories/foods">
            <Foods categories={categories} addProduct={addProduct} />
          </Route>
          <Route exact path="/cart">
            <Cart
              basketData={basketData}
              updateProduct={updateProduct}
              handleEmptyBasket={handleEmptyBasket}
              RemoveItemFromBasket={RemoveItemFromBasket}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
