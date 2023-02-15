import styles from "../styles/Home.module.css";


function Header() {
    return (
        <div className={styles.epicheader}>
          <p className={styles.h1right}> SEVEN </p>
          <p className={styles.boujeeText}> GOLDEN </p>
          <p className={styles.h1left}> GATES </p>
          <hr className={styles.divider} />
        </div>
    )
}

export default Header;