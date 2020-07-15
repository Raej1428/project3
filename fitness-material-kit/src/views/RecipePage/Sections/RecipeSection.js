import React from "react";
// import axios from "axios";
// import cheerio from "cheerio";
// import "firebase/firestore";
// import firestoreDB from "../../BlogPage/firebase-redux/firestore"
// // @material-ui/core components

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { Link } from "react-router-dom";
// import cors from "cors";
// import { title } from "../../../assets/jss/material-kit-react.js";


export default class RecipeSection extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    // const title = this.props.location.state.recipe;
    const req = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=keto", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "286743b9e8mshca96ef72bc84158p10a340jsn84bc27c45ef1"
        }
    });
    
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className={styles.section}>
        <GridContainer>
          <GridItem>
            <div className={styles.brand}>
              <h1 className={styles.title}>Healthy Recipes.</h1>
              <h3 className={styles.subtitles}>
                Check back get updated recipes anytime.
                </h3>
            </div>
            <Button onClick={this.componentDidMount} type="submit" color="primary">Load New Recipes</Button>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem >
          { this.state.activeRecipe.length !== 0 &&
            <div style={styles.container}>
              {recipe.map(recipe => (
                <div key={recipe.id} justify="center">
                  <h1 style={styles.titles}>{recipe.title}</h1>
                  <hr />
                  <Link style={styles.subtitles}>{recipe.link}</Link>
                  <hr />
                  <p style={styles.description}>{recipe.summary}</p>
                  <hr />
                </div>))}
            </div>
             }
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}




    // axios.get("https://cors-anywhere.herokuapp.com/https://api.edamam.com/search").then(response => {
    //   console.log(response);
    //   const recipes = response.data;
    //   this.setState({ recipes })

    //     recipes.push({
    //       recipes
    //     });

    //   console.log(recipes);
    // })