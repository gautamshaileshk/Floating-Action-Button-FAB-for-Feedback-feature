import { useState } from "react";
import styles from "./Header.module.css";
const Header = ({ handleSelectChange}) => {
  
  return (
    <div className={ styles.container}>
      <div className={styles.title}>
        <a>
          <p>The</p> <p className={styles.product}>product</p> <p>platform</p>
        </a>
      </div>
      <div className={styles.menu}>
        <div className={styles.item}>
          <a>
            learn
            <select>
              <option></option>
            </select>
          </a>

          <a>
            practice{" "}
            <select>
              <option></option>
            </select>
          </a>
        </div>
        <div className={styles.user}>
          <img src="./../../userDp.png" alt="user" />
          <select onChange={handleSelectChange}>
          <option>Login</option>
          <option>Logout</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Header
