


const SnackBar = (props) => {
  return (
    <div className={props.showSnackBar ? "snackbar snackbar-show" : "snackbar"}>
      No Results Found...
    </div>
  );
};

export default SnackBar;
