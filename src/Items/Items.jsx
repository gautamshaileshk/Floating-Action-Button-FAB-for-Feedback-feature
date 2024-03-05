import { useState } from "react";
import styles from "./Items.module.css";
import { Fab } from "@mui/material";
import ItemRow from "./ItemRow";
import ReportIssue from "../components/Cards/ReportIssue";
import ShareFeeback from "../components/Cards/ShareFeedback";
import Suggestion from "../components/Cards/Suggestion";
import Contact from "../components/Cards/Contact";

const Items = ({userActive}) => {
  const [item, setItem] = useState(false);
  const [report, setReport] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);
  const [suggesstion, setSuggesstion] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <>
      {item ? (
        <ItemRow />
      ) : (
        <div className={styles.menu}>
          <div
            className={styles.item1}
            onClick={() => {
              setItem(!item);
              setReport(true);
            }}
          >
            <span className={styles.text}>
              <p>Report an Issue</p>
            </span>
            <Fab>
              <img src="./../../../issue.png" />
            </Fab>
          </div>
          <div
            className={styles.item1}
            onClick={() => {
              setItem(!item);
              setShareFeedback(true);
            }}
          >
            <span className={styles.text}>
              <p>Share Feedback</p>
            </span>
            <Fab>
              <img src="./../../../share.png" />
            </Fab>
          </div>
          <div
            className={styles.item1}
            onClick={() => {
              setItem(!item);
              setSuggesstion(true);
            }}
          >
            <span className={styles.text}>
              <p>Give Suggestion</p>
            </span>
            <Fab>
              <img src="./../../../suggestion.png" />
            </Fab>
          </div>
          <div
            className={styles.item1}
            onClick={() => {
              setItem(!item);
              setContact(true);
            }}
          >
            <span className={styles.text}>
              <p>Contact US</p>
            </span>
            <Fab>
              <img src="./../../../feedback.png" />
            </Fab>
          </div>
        </div>
      )}
      {report && <ReportIssue userActive={userActive}/>}
      {shareFeedback && <ShareFeeback userActive={userActive}/>}
      {suggesstion && <Suggestion userActive={userActive}/>}
      {contact && <Contact userActive={userActive}/>}
    </>
  );
};
export default Items;
