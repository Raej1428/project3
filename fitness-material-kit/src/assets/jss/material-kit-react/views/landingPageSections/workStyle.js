import { title, container } from "../../../material-kit-react";

const workStyle = {
  container: {
    ...container
  },
  section: {
    padding: "30px 0"
  },
  title: {
    ...title,
    marginBottom: "30px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  subtitle:{
    ...title
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default workStyle;
