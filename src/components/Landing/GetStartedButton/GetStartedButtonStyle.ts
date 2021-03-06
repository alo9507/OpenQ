import { makeStyles } from "@material-ui/core";

const GetStartedButtonStyle = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 70,
    border: 0,
    color: theme.palette.primary.main,
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    transition: "all 0.6s ease",
    minWidth: "50%",
    "&:hover": {
      boxShadow: theme.shadows[1],
    },
  },
  label: {
    textTransform: "capitalize",
  },
}));

export default GetStartedButtonStyle;
