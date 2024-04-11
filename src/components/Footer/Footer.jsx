import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={` ${styles.footer}`}>
      <div className="row">
        <div className={`col-12 col-md-4 ${styles["footer-section"]}`}>
          <h5>Support</h5>
          <div>
            <p className={`${styles["footer-element"]}`}>FAQ</p>
            <p className={`${styles["footer-element"]}`}>User Manual</p>
          </div>
        </div>

        <div className={`col-12 col-md-4 ${styles["footer-section"]}`}>
          <h5>Contact</h5>
          <div>
            <p className={`${styles["footer-element"]}`}>
              Phone - 0000 111 22 33
            </p>
            <p className={`${styles["footer-element"]}`}>
              E-mail - contact@gmail.com
            </p>
          </div>
        </div>

        <div className={`col-12 col-md-4 ${styles["footer-section"]}`}>
          <h5>Career</h5>
          <div>
            <p className={`${styles["footer-element"]}`}>
              Career Opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
