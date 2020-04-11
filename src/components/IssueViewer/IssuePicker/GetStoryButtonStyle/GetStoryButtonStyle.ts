import { makeStyles } from "@material-ui/core";

const GetStoryButtonStyle = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "30px",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[1],
    },
    "&:active": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default GetStoryButtonStyle;
