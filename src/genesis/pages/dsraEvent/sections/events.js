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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import event1 from "genesis/assets/images/img_2.png";
import event2 from "genesis/assets/images/img_3.png";
import event3 from "genesis/assets/images/img_4.png";
import event4 from "genesis/assets/images/img_5.png";

function Events() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Events
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Have a look at the list of events we have to offer.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={event1}
                name="Tug of War"
                position={{ color: "info", label: "For Faculties" }}
                description="Show off your strength."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={event3}
                name="Triathlon"
                position={{ color: "info", label: "For Faculties" }}
                description="A triathlon is an endurance multisport race consisting of swimming, cycling, and running over various distances."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={event2}
                name="Rangoli"
                position={{ color: "info", label: "For Students" }}
                description="Rangoli is an art form originates in the Indian subcontinent, in which patterns are created on the floor or a tabletop using materials such as powdered lime stone, red ochre, dry rice flour, coloured sand, quartz powder, flower petals, and coloured rocks."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={event4}
                name="Glam it up"
                position={{ color: "info", label: "For Faculties" }}
                description="Makeup competition is a one-of-a-kind initiative for the world's makeup artists to get to know one another and to get the opportunity of international exposure"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Events;
