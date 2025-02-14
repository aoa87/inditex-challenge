import classes from "./loading-bar.module.css";

const LoadingBar: React.FC = () => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loadingBar}></div>
    </div>
  );
};

export default LoadingBar;
