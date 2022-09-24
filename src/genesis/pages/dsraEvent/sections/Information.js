/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Information() {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://www.whoa.in/download/happy-dussehra-with-ravan-free-hand-design-hd-wallpaper",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://www.hindubhagwan.com/Gallery/images/portfolio/full/dussehra_images.jpg",
    },
  ];
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6} md={12}>
            <MKBox mb={5}>
              <Carousel>
                {items.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </Carousel>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.image} />
    </Paper>
  );
}

export default Information;
