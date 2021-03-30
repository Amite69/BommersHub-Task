import { Grid, Container, Typography, TextField, Divider } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
import Banner from "../Banner";
import {useState} from 'react'
import "./style.css";

const Products = ({ categories, addProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");
  if (!categories.length) return <Spinner />;
  
  return (
    <div>
      <Banner />
        <div id="search-field">
          <TextField 
            id="filled-basic" 
            label="Search Products" variant="filled" 
            onChange={(event)=>{
              setSearchTerm(event.target.value)
            }}
          />
        </div>
        {categories.map((category) => {
          return(
            <Container id="products" key={category.id}>
              <Divider variant="middle" />
                <Typography className="cat-title" component="h2" align ="center">
                  {category.name}
                </Typography>
              <Divider variant="middle"/>
              <div className="gutter">
                <Grid container spacing={4}>
                  {category.productsData.filter((product)=>{
                      if(searchTerm === ""){
                        return product
                      } else if(product.name.toLowerCase().includes(searchTerm)){
                        return product
                      }
                  }).map((product) => (
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
