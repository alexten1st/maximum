import React from "react";
import { Audio } from "react-loader-spinner";
import styles from "../../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.spiner}>
      <Audio
        height="120"
        width="120"
        radius="20"
        color="green"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
