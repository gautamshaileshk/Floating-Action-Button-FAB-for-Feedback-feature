import styles from "./Card.module.css";
import { IoEye } from "react-icons/io5";
const Card = () => {
  return (
    <div className={styles.contianer}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.post}>
            <p>Posted on 29 Feb 2023</p>
          </div>
          <div className={styles.title}>
            <img src="./../../../public/startup.png" />
            <p>startup</p>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup? A travel startup wants Amazon to
            pre-install their personal travel agent bot on existing Amazon
            Echos. What is the value of the partnership to the travel startup?
          </p>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <span>
              <p>Design</p>
            </span>
            <span>
              <p>UX</p>
            </span>
          </div>
          <div className={styles.easy}>
            <p>easy</p>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.ans}>
            <img src="./../../../public/message.png" alt="img" />
            <p>23 answer</p>
          </div>
          <div className={styles.views}>
           <IoEye/>
            <p>100 views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
