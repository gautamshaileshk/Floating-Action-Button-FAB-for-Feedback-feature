import { useState } from "react";
import styles from "./ReportIssue.module.css";

const ReportIssue = ({ userActive }) => {
  console.log("From report issue" + userActive);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!"
    );
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>
            Let us know about the <strong>Issue</strong> you are facing right
            now!
          </p>
        </div>
        <hr />
        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <label className={styles.chooseLabel}>Choose a section</label>
            <span className={styles.dropdown}>
              <p>Interview Questions</p>{" "}
              <select value={value} onChange={handleChange}>
                <option></option>
                <option value="question">Questions</option>
                <option>Technology</option>
                <option>Server</option>
              </select>
            </span>
            <label className={styles.descriptionTitle}>
              Describe the issue in details<p style={{ color: "red" }}>*</p>
            </label>
            <span className={styles.description}>
              <textarea placeholder="Write here.. " />
              <button>
                <img src="./../../../attach.png" />
                Attach
              </button>
            </span>
            {userActive ? (
              <span className={styles.logedin1}></span>
            ) : (
              <span className={styles.logedin}>
                <p>Enter your Email to receive an update </p>
                <input type="text" placeholder="Enter your Email" />
              </span>
            )}
            <button className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ReportIssue;
