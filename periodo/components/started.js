import React from "react";
import Link from "next/link";
import styles from "./started.module.css";

const Start = () => {
  function getCurrentDate(separator = "") {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  function getnextDate(separator = "") {
    const newDate = new Date();
    const date = newDate.getDate() + 28;
    let month = newDate.getMonth() + 1;
    if (date > 30) {
      month = (newDate.getMonth() % 12) + 2;
    }
    let year = newDate.getFullYear();
    if (month > 12) {
      year = newDate.getFullYear() + 1;
    }

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date % 30}`;
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Hii Girls, wanna track your periods!!</h1>
        <h4 className={styles.heading}>Period Cycle: 28 days</h4>
        <h4 className={styles.heading}>Next Period Date: {getnextDate("-")}</h4>
        <h4 className={styles.heading}>
          Period just started: {getCurrentDate("-")}
        </h4>

        <Link href="/calender">
          {/* <div className={styles.btn_container}> */}
          <button className={styles.button}>Tap here</button>
          {/* </div> */}
        </Link>
      </div>
    </>
  );
};

export default Start;
