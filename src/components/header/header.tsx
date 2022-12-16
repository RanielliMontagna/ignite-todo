import styles from "./header.module.css";

const Header = () => {
  const logoUrl = "rocket.svg";

  return (
    <header className={styles.header}>
      <img src={logoUrl} alt="Logotipo do Todo" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
};

export { Header };
