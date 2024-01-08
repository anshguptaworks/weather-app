import React from "react";
import cx from "classnames";

import styles from "./card.module.scss";

const Card = ({ children, className }) => {
  return <div className={cx(styles.card, className)}>{children}</div>;
};

export default Card;
