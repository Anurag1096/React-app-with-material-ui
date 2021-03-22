import { makeStyles } from "@material-ui/core/styles";
// Using hooks  for styling
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    padding: "40px",
  },
  icon: {
    marginRight: "10px",
    opacity: "1.6",
    color: "#e84545",
  },
  btn: {
    marginTop: "20px",
  },
  opaq: {
    backgroundColor: "black",
  },
  cardStyle: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },

  cardContent: {
    flexGrow: "1",
  },
  footer: {
    backgroundColor: "white",
    padding: "50px 0",
  },
}));
export default useStyles;
