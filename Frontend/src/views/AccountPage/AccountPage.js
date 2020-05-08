import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import PostTable2 from "views/Components/Sections/PostTable2"

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function AccountPage(props) {
  

  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand="Website name"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/bg-dark-grey.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center" >
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.name} color="white">
                    <h3 className={classes.title}>User name</h3>
                    <h4>manage your posts here</h4>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
                  <GridItem align="right">
                    <Link to={"/posting-page"} className={classes.link}> 
                      <Button color="info">
                        add post
                      </Button>
                    </Link>
                  </GridItem>
            </GridContainer>
            <GridContainer justify="center" >
              <GridItem>
                <div className={classes.description}>
                  {/* <PostTable data/> */}
                  <PostTable2/>
                </div>
              </GridItem>
            </GridContainer>
            <br/>
            <br/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
