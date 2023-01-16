import styles from "./Rating.module.css";

const Rating = ({ value }) => {
  // to make sure the value passed is between 0 and 5
  value = Math.min(5, Math.max(0, value));

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < value) {
      if (value - i > 0.5) {
        stars.push(
          <i key={i} className={` ${styles.StarColour} fa-solid fa-star`}></i>
        );
      } else {
        stars.push(
          <i
            key={i}
            className={`${styles.StarColour} fa-solid fa-star-half-stroke`}
          ></i>
        );
      }
    } else {
      stars.push(
        <i key={i} className={`${styles.StarColour} fa-regular fa-star`}></i>
      );
    }
  }
  return <span>{stars}</span>;
};

export default Rating;
