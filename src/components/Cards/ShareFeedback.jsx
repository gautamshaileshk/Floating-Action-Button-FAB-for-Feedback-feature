import { Checkbox } from "@mui/material";
import styles from "./ShareFeedback.module.css";
import { useState } from "react";
const ShareFeeback = ({userActive}) => {

  const handleSubmit=(e) =>{
    e.preventDefault();
    alert("Thanks for your valuable feedback!")
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Let us know your <strong>Feedback</strong> about us!
        </p>
      </div>
      <hr />
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <span className={styles.description}>
            <textarea placeholder="Write here.. " />
            <button>
              <img src="./../../../attach.png" />
              Attach
            </button>
          </span>
         
          {userActive ? (<span className={styles.checkbox}><Checkbox/><p>send feedback ananymously</p></span>): (<span className={styles.logedin}><p>Enter your Email to receive an update </p>
          <input type="text" placeholder="Enter your Email"/></span>)}
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default ShareFeeback;
