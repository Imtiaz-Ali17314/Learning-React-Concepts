import styles from "./CityInput.module.css";
const CityInput = ({ handleOnChangeEvent }) => {
  return (
    <input
      type="text"
      className={`${styles.input} form-control mb-2`}
      placeholder="Enter City Name"
      onKeyDown={handleOnChangeEvent}
    />
  );
};

export default CityInput;
