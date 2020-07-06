import React from 'react';
import { connect } from 'react-redux';
// importing material components
import CommentGroup from "./CommentGroup";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPage.js";
// @material-ui/core components
import reducer from "../reducers/reducer";
import "firebase/firestore";
import firestoreDB from "../firebase-redux/firestore";
// import Parallax from "../../../components/Parallax/Parallax.js";


class PostList extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    
    }

  componentDidMount() {
    firestoreDB.collection("blog-page").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ posts: data});
    });
      
  }
  
  render() { 
    const { posts } = this.state;
    console.log(styles.container);
    return (<div style={styles.container}>
                    <GridContainer justify="center">
                        <GridItem >
                            <div style={styles.container}>
                              {posts.map(post => (
                                <div key={post.name} justify="center">       
                                    <h1 style={styles.titles}>{post.title}</h1>
                                    <hr />
                                    <h2 style={styles.subtitles}> Category: {post.category}</h2>
                                    <hr />
                                    <p style={styles.description}>{post.details}</p>
                                    <hr />
                                </div>))}
                             </div>
                        </GridItem>
                    </GridContainer>
                    <CommentGroup />
            </div>)
    }
} 

function mapStateToProps(state) {
    console.log(state.reducer);
    return {
        posts: state.reducer
    }
}

export default connect(mapStateToProps)(PostList)
/*
function PostList(props) {
    console.log(props.posts);
    const classes = useStyles();
    const arr = [];
    arr.push(props.posts);
    console.log(arr);
    const listItems = arr.map((items, index) => 
        <div key={index} justify="center">
            <h1 className={classes.titles} key={index}>{items.title}</h1>
            <hr />
            <h2 className={classes.subtitles}>Category: {items.category}</h2>
            <hr />
            <p className={classes.description}>{items.details}</p>
            <hr />

        </div>
    );
    return (

            <CommentGroup />
        </div>
    );
    return (
        // <Parallax>

        <div className={classes.containter}>
            <GridContainer justify="center">
                <GridItem >
                    <div className={classes.mainRaised}>
                        {listItems}
                    </div>
      </GridItem>
            </GridContainer>
        </div>

    )
}

firestoreDB.collection("blog-page").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {// doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
});
*/


