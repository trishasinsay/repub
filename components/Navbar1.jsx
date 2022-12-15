<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet"></link>
</link>

import Button from "./Button";
import styles from "./Navbar1.module.css";

export default function Navbar() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="LOGO.png" alt="image" />
        </div>
        <div className={styles.message}>
        <h1>RE-PUB</h1>
        </div>
        <div className={styles.content}>
        <Button variant="secondary">
          <a href="/Home"> Home</a>
          </Button>
          <Button variant="secondary">
          <a href="/Titles"> Content</a>
          </Button>
          <Button variant="secondary">
          <a href="/Create">Create</a>
          </Button>
          <Button variant="primary">
          <a href="/Logout">Logout</a>
          </Button>
        </div>
      </div>
    );
  }
