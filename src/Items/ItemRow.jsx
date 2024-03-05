import styles from "./ItemRow.module.css";
import { Fab } from "@mui/material";

const ItemRow = () => {
  return (
    <>
      <div className={styles.container}>
        <ul>
          <li>
            <Fab>
              <img src="./../../../issue.png" />
            </Fab>
          </li>
          <li>
            <Fab>
              <img src="./../../../share.png" />
            </Fab>
          </li>
          <li>
            <Fab>
              <img src="./../../../suggestion.png" />
            </Fab>
          </li>
          <li>
            <Fab>
              <img src="./../../../feedback.png" />
            </Fab>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ItemRow;
