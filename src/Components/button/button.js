 import styles from "./Button.module.css";

 export default function Button ({text,children, handleClick}) {
    return (
        <button className={styles.feedBack} onClick={handleClick}>{text}  {children}</button>
    );
}
