import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingBasket, ExpandMore } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import "./style.css";

const NavBar = ({ basketItems, totalCost }) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className="custom-title"
            >
              BoomersHub
            </Typography>
            
            {location.pathname === "/cart" ? (
              <div className="basket-wrapper">
                <h2>
                  Total cost: <strong>{totalCost}</strong>
                </h2>
              </div>
            ) : (
              <div className="basket-wrapper">
                <div className="dropdown">
                  <Typography className="dropbtn">Categories <ExpandMore/></Typography>
                  <div className="dropdown-content">
                    <Typography
                    component={Link}
                    to="/categories/electronics"
                    className="title"
                  >
                      Electronics
                    </Typography>
                    <Typography
                      component={Link}
                      to="/categories/clothes"
                      className="title"
                    >
                      Clothes
                    </Typography>
                    <Typography
                      component={Link}
                      to="/categories/foods"
                      className="title"
                    >
                      Foods
                    </Typography>
                  </div>
                </div>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show basket contents"
                  color="inherit"
                >
                  <Badge className="custom-badge" badgeContent={basketItems} color="secondary">
                    <ShoppingBasket className="custom-basket" />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
