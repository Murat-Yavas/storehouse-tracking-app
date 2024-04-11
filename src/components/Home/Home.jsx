import homeImage1 from "../../assets/homeImage1.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={` ${styles.home}`}>
      <div className="row">
        <div className={`col-12 col-md-6 ${styles["app-info"]}`}>
          <h2 className={`mb-4 ${styles.title} text-center`}>
            Why use our App
          </h2>
          <h3 className="mb-4">
            Everything you may need for storehouse tracking is in a single
            application
          </h3>
          <div className={`${styles.text}`}>
            With our application, you can track the information in your
            storehouses in detail. You can quickly and easily follow stock
            movements, latest buying and selling information, stock quantities,
            stock costs, and stock level information from a single screen.
          </div>
          <button className={`${styles["app-info-button"]}`}>Try for free</button>
        </div>
        <img
          className={`col-12 col-md-6 ${styles["app-info-image"]}`}
          src={homeImage1}
        />
      </div>
    </div>
  );
};

export default Home;
