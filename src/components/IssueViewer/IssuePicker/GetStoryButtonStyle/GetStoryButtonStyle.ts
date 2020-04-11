import { makeStyles } from "@material-ui/core";

const GetStoryButtonStyle = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default GetStoryButtonStyle;
