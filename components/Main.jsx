<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
</link>

import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <button><img src="MARIALOGO.png" alt="image"/></button>
      </div>
      <div className={styles.message}>
        <h1>ABOUT US</h1>
        <p>
        The purpose of this blog is to read and publish your interest and share your passion
        with like minded people and to connect to other people.  Our blog content post may be used to offer book reviews, 
        book criticism, or book suggestions, among other things. Blogs on books might be general 
        or specialized.
        </p>
        <div className={styles.GetStarted}>
          <a href="/Login"> Get Started</a>
        </div>
      </div>
    </div>
  );
}
