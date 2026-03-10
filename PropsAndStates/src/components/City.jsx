import styles from "./City.module.css";
const City = ({ city, active, handelClickEvent }) => {
  return (
    <>
      <li className={`list-group-item ${active && "active"}`}>
        {city}
        <button
          value={city}
          onClick={handelClickEvent}
          className={`${styles.button} btn btn-info`}
        >
          Info
        </button>
      </li>
    </>
  );
};

export default City;
