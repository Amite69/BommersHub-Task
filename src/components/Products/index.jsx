import { Grid, Container, Typography, Divider } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
import Banner from "../Banner";
import "./style.css";

const Products = ({ categories, addProduct }) => {
  if (!categories.length) return <Spinner />;
  return (
    <div>
      <Banner />
        {categories.map((category) => {
          return(
            <Container id="products">
              <Divider variant="middle" />
                <Typography className="cat-title" component="h2" align ="center" >
                  {category.name}
                </Typography>
              <Divider variant="middle"/>
              <div className="gutter">
                <Grid container spacing={4}>
                  {category.productsData.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4}>
                      <Product product={product} addProduct={addProduct} />
                    </Grid>
                  ))}
                </Grid>
              </div>
              
            </Container>
          );
        })}
    </div>
  );
};

export default Products;
