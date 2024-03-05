import { useState } from "react";
import styles from "./Suggestion.module.css";

const Suggestion = ({ userActive }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your valuable Suggestion!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Share your <strong>Suggestions</strong> with us for a chance to earn
          rewards!
        </p>
      </div>
      <hr />
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label className={styles.chooseLabel}>Choose a section</label>
          <span className={styles.dropdown}>
            <p>Select</p>
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
  );
};
export default Suggestion;
