import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/handmadeCrafts/handmade2.jpeg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="Mirrors Mens"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Mirrors Mens
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                Mirrors Mens store is your premier destination for high-quality men's fashion. Established in 2024, we take pride in offering a diverse range of handpicked fashion pieces under the brand name "Mirrors Mens."
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                Mirrors Mens is the brainchild of Inish Bashyal, a dedicated student at Softwarica College of IT and E-Commerce. Starting as a classroom assignment, Mirrors Mens aspires to become an international hub for men's fashion, introducing genuine products at competitive prices.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
             Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
  Welcome to Mirrors Mens, where we are on a mission to redefine your online shopping experience in men's fashion. Our commitment is to bring you high-quality products at prices that fit your budget. At Mirrors Mens, we believe that fashion should be accessible to everyone around the globe. Explore our extensive collection of carefully curated items, featuring a diverse range of styles, from classic essentials to the latest trends.

  Our dedication to quality extends beyond clothing – we offer an array of products that elevate your lifestyle. Discover unique accessories, premium grooming essentials, and more, all crafted to meet the highest standards of quality and style. At Mirrors Mens, we understand that your individuality deserves to be celebrated, and our curated selection reflects just that.

  Continual innovation is at the heart of what we do. We're constantly enhancing our product range to meet the ever-evolving needs of our customers. Through close collaborations with top manufacturers and rigorous quality testing, we ensure that every product from Mirrors Mens not only meets but exceeds expectations. Your satisfaction is our priority, and we are dedicated to delivering exceptional performance and style with every purchase.

  Explore the convenience of online shopping with Mirrors Mens. Join us on this e-commerce journey where quality, style, and affordability meet seamlessly. Your perfect wardrobe and lifestyle upgrades are just a click away.
</Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Explore Our Collection
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
