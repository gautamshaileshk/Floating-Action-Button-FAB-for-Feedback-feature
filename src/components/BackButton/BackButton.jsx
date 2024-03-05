import { FaArrowLeft } from "react-icons/fa";
import styles from "./BackButton.module.css";
const BackButton = ({ fabActive }) => {
  return (
    <>
      <div className={ styles.container }>
        <FaArrowLeft style={{ fontSize: "26px", color: "#D9D9D9" }} />
        <p>back to questions</p>
      </div>
      <div className={styles.meta}>
        <div className={styles.header}>
          <h1>Practice Interview Questions</h1>
          <div className={styles.filters}>
            <div className={styles.action}>
              <span className={styles.text}>
                <p>Embark on an Exploration: 800 Questions Await!</p>
              </span>
              <span className={styles.imgIcon}>
                <img src="./../../../filterIcon.png" alt="" />
                <p>filters</p>
              </span>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <span className={styles.text}>
                  <img src="./../../../lines.png" />
                  <p>Popular</p>
                </span>
                <img src="./../../../downArrow.png" />
              </div>
              <div className={styles.item}>
                <span className={styles.text}>
                  <p>Complexity</p>
                </span>
                <img src="./../../../downArrow.png" />
              </div>
              <div className={styles.item}>
                <span className={styles.text}>
                  <p>Industry</p>
                </span>
                <img src="./../../../downArrow.png" />
              </div>
              <div className={styles.item}>
                <span className={styles.text}>
                  <p>Company Type</p>
                </span>
                <img src="./../../../downArrow.png" />
              </div>
              <hr style={{ marginTop: "10px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BackButton;
