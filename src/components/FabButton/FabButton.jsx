import { useState } from "react";
import FabIcon1 from "./../../../public/FabIcon1.png";
import FabIcon from "./../../../public/FabIcon.png";
import Items from "../../Items/Items";
import styles from "./FabButton.module.css";
import { Fab } from "@mui/material";
const FabButton = ({userActive}) => {
  const [fabicon, setFabicon] = useState(FabIcon);
  const [menuVisible, setMenuVisible] = useState(false);
  const handleClick = (e) => {
    if (fabicon == FabIcon) {
      setFabicon(FabIcon1);
      setMenuVisible(true);
    } else {
      setFabicon(FabIcon);
      setMenuVisible(false);
    }
  };

  return (
    <>
  
    <div className={styles.fab}>
      <div className={styles.fabIcon}>
        <Fab onClick={handleClick}>
          <img src={fabicon} />
        </Fab>
      </div>
      {menuVisible && <Items userActive={userActive} />}
    </div>
    </>
    
  );
};
export default FabButton;
