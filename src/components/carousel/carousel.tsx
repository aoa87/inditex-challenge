import classes from "./carousel.module.css";

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={classes.carousel}>
      <div className={classes["carousel__body"]}>{children}</div>
    </div>
  );
};

export default Carousel;
