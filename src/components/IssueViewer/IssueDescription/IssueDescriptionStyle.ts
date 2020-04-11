import { makeStyles } from "@material-ui/core/styles";

const IssueDescriptionStyle = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: "25%",
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  injectedIssueBodyHtml: {
    "& a": {
      color: theme.palette.primary.contrastText,
    },
  },
  title: {
    fontSize: 20,
    color: theme.palette.primary.contrastText,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default IssueDescriptionStyle;
