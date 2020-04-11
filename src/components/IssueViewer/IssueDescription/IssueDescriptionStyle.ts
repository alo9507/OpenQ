import { makeStyles } from "@material-ui/core/styles";

const IssueDescriptionStyle = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    minWidth: 275,
    maxWidth: "80%",
    minHeight: "500px",
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  head: {
    textAlign: "center",
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
}));

export default IssueDescriptionStyle;
