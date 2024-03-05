import { useState } from "react";
import BackButton from "../BackButton/BackButton";
import Header from "../Header/Header";
import MiddleContent from "../MiddleContent/MiddleContent";
import styles from "./Home.module.css";
import FabButton from "../FabButton/FabButton";
const Home = () => {
  const [userActive,setUserActive] =useState(true);
  console.log(userActive)
  const handleSelectChange=(event)=>{
    if(event.target.value==="Login"){
      setUserActive(true)
  }else if (event.target.value === "Logout") {
   setUserActive(false)
  }
}
  return (
    <div className={styles.container}>
      <Header  handleSelectChange={ handleSelectChange} />
      <BackButton />
      <MiddleContent />
      <FabButton  userActive={userActive}/>
    </div>
  );
};

export default Home;
