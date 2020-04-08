import { makeStyles } from "@material-ui/core";

const IssueViewerStyle = makeStyles({
  issueViewer: {
    textAlign: "center",
  },
  labelContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: "5px",
    },
  },
});

export default IssueViewerStyle;
