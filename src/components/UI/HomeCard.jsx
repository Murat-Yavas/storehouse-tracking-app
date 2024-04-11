import Card from "react-bootstrap/Card";
import styles from "./HomeCard.module.css";

const HomeCard = ({ title, text, icon }) => {
  return (
    <Card className={`col-12 col-md-6 mb-4 ${styles["home-card"]}`}>
      <Card.Body>
        {icon}
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
