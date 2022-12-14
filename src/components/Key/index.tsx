import cn from "classnames";
import { FC } from "react";

import styles from "./styles.module.scss";

import { DirectionStrings } from "../../types";

import { ReactComponent as ArrowSVG } from "../../static/img/arrow.svg";

interface IKeyProps {
  direction: string;
  pressedKey: DirectionStrings | null;
  onClick: () => void;
}

const Key: FC<IKeyProps> = ({ direction, pressedKey, onClick }) => {
  const isActive = direction === pressedKey;

  return (
    <button
      className={cn(styles.key, styles["key" + direction], {
        [styles.keyActive]: isActive,
      })}
      onClick={onClick}
    >
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>
        <span className={styles.arrow}>
          <ArrowSVG />
        </span>
      </span>
    </button>
  );
};

export default Key;
