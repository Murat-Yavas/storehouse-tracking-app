import homeImage1 from "../../assets/homeImage1.jpg";
import HomeCard from "../UI/HomeCard";
import styles from "./Home.module.css";
import { IoDocumentText } from "react-icons/io5";
import { TbBuildingWarehouse } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";

const Home = () => {
  return (
    <div className={`${styles.home}`}>
      <div className="row">
        <div className={`col-12 col-md-6 ${styles["app-info"]}`}>
          <h2 className={`mb-4 ${styles.title} text-center`}>
            Why use our application
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
          <button className={`${styles["app-info-button"]}`}>
            Try for free
          </button>
        </div>
        <img
          className={`col-12 col-md-6 ${styles["app-info-image"]}`}
          src={homeImage1}
        />
      </div>

      <div className={`container ${styles["feature-cards"]}`}>
        <h2 className={`mb-4 ${styles.title} text-center`}>
          What can you do with our application
        </h2>
        <div className="row">
          <HomeCard
            icon={<IoDocumentText className={styles.icon} />}
            title="Product Management"
            text="Add your products to our application with product-specific information such as
                     product code, product name, and the storehouse where the product is located."
          />
          <HomeCard
            icon={<MdOutlineWarehouse className={styles.icon} />}
            title="Stock Tracking"
            text="Easily track the minimum and maximum stock levels of your stock and products
                    on a storehouse basis, stock inventory, stock entry and exit movements from a single screen."
          />
          <HomeCard
            icon={<TbBuildingWarehouse className={styles.icon} />}
            title="Storehouse Tracking"
            text="Track your products in multiple locations from a single screen with multiple warehouse tracking."
          />
          <HomeCard
            icon={<FaMoneyBillWave className={styles.icon} />}
            title="Accurate Price"
            text="Quickly update the price of your products and increase your profits"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
