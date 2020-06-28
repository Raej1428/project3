import { container, title } from "../../material-kit-react";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  titles: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "15px",
    minHeight: "32px",
    marginLeft: "1.25rem",
    textDecoration: "none"
  },
  subtitles: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    color: "#999",
    marginLeft: "1.25rem"
  },
  description: {
    fontSize: "1.25rem",
    color: "#999",
    margin: "1.13rem",
    padding: "1rem"
  },
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
  }
};

export default landingPageStyle;
