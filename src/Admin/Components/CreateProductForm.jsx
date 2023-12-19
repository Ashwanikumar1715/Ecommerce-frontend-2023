import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];
const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPresent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    setProductData((prevState) => {
      const sizes = [...prevState.size];
      sizes[index][name] = value;
      return {
        ...prevState,
        size: sizes,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data before dispatch:", productData);
    dispatch(createProduct(productData)); // Assuming jwt is defined somewhere in your code
    console.log(productData);
  };

  return (
    <div className="p-10">
      <Fragment>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Add New Product
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="createProductContainer min-h-screen"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Brand"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={productData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Color"
                name="color"
                value={productData.color}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                type="number"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={productData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                fullWidth
                label="Discounted Price"
                name="discountedPrice"
                value={productData.discountedPrice}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                fullWidth
                label="Discount Percent"
                name="discountPresent"
                value={productData.discountPresent}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Top Level Category</InputLabel>
                <Select
                  name="topLavelCategory"
                  value={productData.topLavelCategory}
                  onChange={handleChange}
                  label="Top Level Category"
                >
                  <MenuItem value="men">Men</MenuItem>
                  <MenuItem value="women">Women</MenuItem>
                  <MenuItem value="kids">Kids</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Second Level Category</InputLabel>
                <Select
                  name="secondLavelCategory"
                  value={productData.secondLavelCategory}
                  onChange={handleChange}
                  label="Second Level Category"
                >
                  <MenuItem value="clothing">Clothing</MenuItem>
                  <MenuItem value="accessories">Accessories</MenuItem>
                  <MenuItem value="brands">Brands</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Third Level Category</InputLabel>
                <Select
                  name="thirdLavelCategory"
                  value={productData.thirdLavelCategory}
                  onChange={handleChange}
                  label="Third Level Category"
                >
                  <MenuItem value="top">Tops</MenuItem>
                  <MenuItem value="women_dress">Dresses</MenuItem>
                  <MenuItem value="t-shirts">T-Shirts</MenuItem>
                  <MenuItem value="saree">Saree</MenuItem>
                  <MenuItem value="lengha_choli">Lengha Choli</MenuItem>
                  <MenuItem value="mens_kurta">Mens Kurta</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                multiline
                name="description"
                rows={3}
                onChange={handleChange}
                value={productData.description}
              />
            </Grid>
            {productData.size.map((size, index) => (
              <Grid container item spacing={3} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Size Name"
                    name="name"
                    value={size.name}
                    onChange={(event) => handleSizeChange(event, index)}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Quantity"
                    name="size_quantity"
                    type="number"
                    onChange={(event) => handleSizeChange(event, index)}
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ p: 1.8 }}
                className="py-20"
                size="large"
                type="submit"
              >
                Add New Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    </div>
  );
};

export default CreateProductForm;
