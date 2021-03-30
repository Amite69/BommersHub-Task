import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./banner_photo.jpg";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4} >
          <Grid  item xs={12} sm={6}>
            <div className="content">
              <Typography className="title" variant="h1">
                Welcome to Shop
              </Typography>
              <Typography className="sub-title" variant="h5">
                Boomershub
              </Typography>
              <Typography className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per nostra inceptos
              </Typography>
              <Button className="shopping-button" href="#products">
                SHOP NOW
              </Button>
            </div>
          </Grid>
          <Grid className="brand" item sm={6}>
            <img src={logo} alt="Brand-tv" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
