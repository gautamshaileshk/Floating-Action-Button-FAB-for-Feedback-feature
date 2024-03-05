import styles from "./Contact.module.css";
const Contact = ({ userActive }) => {
  const handleSubmit=(e)=>{
    e.preventdefault();
    alert("Thanks for reaching out to us! We will get back to you as soon as possible")
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Get in <strong>Contact with us </strong> for your queries!
        </p>
      </div>
      <hr />
      {userActive ? (
        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <label className={styles.chooseLabel}>Your name</label>
            <span className={styles.dropdown}>
              <input placeholder="Enter your name" />
            </span>
            <label className={styles.descriptionTitle}>
              what would you like to ask<p style={{ color: "red" }}>*</p>
            </label>
            <span className={styles.description}>
              <input placeholder="Write here.. " />
            </span>
            <button className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      ) : (
        <form className={styles.contactInfo}>
          <label> Your Name <strong style={{color:"red"}}>*</strong></label>
          <input type="text" placeholder="Enter your Name"/>
          <label>Your Email <strong style={{color:"red"}}>*</strong></label>
          <input type="text" placeholder="Enter your Email"/>
          <label>Your Mobile number</label>
          <input type="text" placeholder="Enter your umber"/>
          <label>What would you like to akse <strong style={{color:"red"}}>*</strong></label>
          <input type="text" className={styles.message} placeholder="write here"/>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
