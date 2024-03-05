import styles from "./MiddleContent.module.css";
import { IoRocketOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import Card from "./Card";
const MiddleContent = () => {

  return (
    <>
      <div className={ styles.container }>
        <div className={styles.upper}>
          <div className={styles.navbar}>
            <div className={styles.topic}>
              <div>design</div>
              <div>technology</div>
            </div>
            <div className={styles.image}>
              <img src="./../../../public/startup.png" alt="img" />
              <p style={{ fontSize: "15px" }}>Startup</p>
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.text1}>
              A travel startup wants Amazon to pre-install their personal travel
              agent bot on existing Amazon Echos. What is the value of the
              partnership to the travel startup?{" "}
            </div>
            <div className={styles.text2}>
              Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
              viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
              donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
              magna cursus se?{" "}
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.views}>
              <p>
                <IoEye />
              </p>
              <p>100 views</p>
            </div>
            <div className={styles.message}>
              <p>
                <MdInfoOutline />
              </p>
              <p>How should yiu word your answer</p>
            </div>
          </div>
        </div>
        <div className={styles.mid}>
          <div className={styles.answer}>
            <p>answer (23)</p>
          </div>
          <div className={styles.sort}>
            <p>sort by:</p>{" "}
            <span>
              <p>popular</p>{" "}
              <select>
                <option></option>
              </select>
            </span>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.lowerNav}>
            <div className={styles.lowerUSer}>
              <img src="./../../../userDp.png" alt="img" />
              <span className={styles.lowerUSerInfo}>
                <p className={styles.userName}>
                  <b>Neha Bhat</b> (You)
                </p>
                <time>Feb 29,2023</time>
              </span>
            </div>
            <div className={styles.edit}>
              <div className={styles.icon}>
                <RiEditFill />
              </div>
              <p>Edit</p>
            </div>
          </div>
          <div className={styles.lowerText}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum
              enim ornare feugi vitae. Eget proin aliquam blandit eget vitae
              erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices
              risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas
              ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus
              ipsum interdum ut velit quam. Bibendum amet mi....{" "}
              <strong>Show more</strong>
            </p>
          </div>
          <div className={styles.lowerInfo}>
            <div className={styles.like}>
              <BiLike />
              <p>Like</p>
            </div>
            <div className={styles.comment}>
              <RiMessage2Line style={{ width: "25px", height: "25px" }} />
              <input placeholder="Add a comment" />
              <button>post</button>
            </div>
          </div>
        </div>
      </div>
      <div className={ styles.card}>
        <Card />
        <Card />
      </div>
    </>
  );
};

export default MiddleContent;
