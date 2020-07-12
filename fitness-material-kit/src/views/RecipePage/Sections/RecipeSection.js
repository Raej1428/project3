import React from "react";
import axios from "axios";
import cheerio from "cheerio";
// import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { addres } from '../actions.js.js'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { Link } from "react-router-dom";
import cors from "cors";
// import { title } from "../../../assets/jss/material-kit-react.js";

const useStyles = makeStyles(styles);
export default function RecipeSection() {
  const classes = useStyles();
  const results = [];
  function scrape() {
    console.log("\n-=#=--=#=--=#=--=#=--=#=--=#=-\n" +
      "Grabbing Healthy Recipies\n" +
      "from allrecipies.com:" +
      "\n-=#=--=#=--=#=--=#=--=#=--=#=-\n");

    const corsOptions = {
      optionsSuccessStatus: 200,
      crossOrigin: true
    }
    console.log(corsOptions)

    axios.get("https://www.allrecipes.com/recipes/84/healthy-recipes/", cors(corsOptions)).then(function (response) {
      console.log(response);
      const $ = cheerio.load(response.data);
      console.log(response.data);

      $(".fixed-recipe-card").each(function (i, element) {

        const title = $(element)
          .find("a")
          .first()
          .attr(".data-name")
          .text()
          .trim();

        const sum = $(element)
          .find(".fixed-recipe-card__info").find(".fixed-recipe-card__description ng-isolate-scope")
          .text()
          .trim();

        const link = $(element).find("a")
          .attr("href");

        results.push({
          title: title,
          summary: sum,
          link: link
        });
      });

      console.log(results);
    });
  }
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem>
          <div className={classes.brand}>
            <h1 className={classes.title}>Healthy Recipes.</h1>
            <h3 className={classes.subtitles}>
              Check back get updated recipes anytime.
                </h3>
          </div>
          <Button onClick={scrape} type="submit" color="primary">Load New Recipes</Button>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem >
          <div style={styles.container}>
            {results.map(res => (
              <div key={res.key} justify="center">
                <h1 style={styles.titles}>{res.title}</h1>
                <hr />
                <Link style={styles.subtitles}>{res.link}</Link>
                <hr />
                <p style={styles.description}>{res.sum}</p>
                <hr />
              </div>))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

