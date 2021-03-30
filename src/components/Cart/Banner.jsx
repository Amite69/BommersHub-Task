import { Container, Typography, Button, Grid } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";

const Banner = () => {
  return (
    <div className="basket-banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className="content">
            <Typography className="title" variant="h1">
              Your Cart is Empty
            </Typography>
            <Typography className="sub-title" variant="h1">
              Add some to Make you Happy
            </Typography>
            <Button className="shopping-button" component={Link} to="/">
              Shopping
            </Button>
          </Grid>
          <Grid className="brand" item xs={12} sm={6}>
            <ShoppingCart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
