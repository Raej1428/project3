import React from "react";
import { useState } from 'react';
import { connect } from 'react-redux'
import { addPost } from './actions.js'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
// import { title } from "../../../assets/jss/material-kit-react.js";
// import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle";

const useStyles = makeStyles(styles);
function BlogSection(props) {
  const [post, setPost] = useState('');

  function handleChange(e) {
    setPost(e.target.value);
  }

  function handleSubmit(e) {
    if (post !== '') {
      props.addPost(post);
      setPost('');
    }
    e.preventDefault();
  }
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Blog</h2>
          <h5 className={classes.description}>
            How's it going? Let us know.
            Found a new favorite recipe, workout, or reach one of your fitness goals, go ahead blog about it!
          </h5>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  onChange={handleChange}
                  value={post.name}
                  labelText="Username:"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  onChange={handleChange}
                  value={post.title}
                  labelText="Title:"
                  id="title"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  onChange={handleChange}
                  value={post.category}
                  labelText="Category:"
                  id="category"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                onChange={handleChange}
                value={post.details}
                labelText="The Details:"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button type="submit" color="primary">Post</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapDispatchToProps = {
  addPost
}

export default connect(null, mapDispatchToProps)(BlogSection)