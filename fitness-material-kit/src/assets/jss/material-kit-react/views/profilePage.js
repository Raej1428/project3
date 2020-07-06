import { container, title, cardTitle, cardSubtitle } from "../../material-kit-react";

import imagesStyle from "../../../../assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "left",
    "& img": {
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    color: "#999",
    textAlign: "left !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  cardTitle,
  cardSubtitle,
  smallTitle: {
    color: "#6c757d"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "left"
  }
};

export default profilePageStyle;
