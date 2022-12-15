<>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet"></link>
</>


import styles from "./Story.module.css";

export default function Story() {
     return(
        <div className={styles.container}>
            <div class={styles.cards}>
            <div class={styles.card}>
                <img class={styles.card__image} src="5.png" alt="image"/>
                <div class={styles.card__content}>
                    <p>       CHATTY GRWM: HOW TO DEAL </p>
                    <p>        WITH HATERS/TOXIC PEOPLE</p>
                    <p>                    By: Kryz Uy </p>
                </div>
        <div className={styles.message}>
         <div className={styles.word}>
          <p>
          Hey hey hey, ladies (and gents!) we&apos;re back with a GRWM! Oh boy, it&apos;s been a while! Today we&apos;ll focus on glamin&apos; up while I give my two cents on how to deal with ballbusters.
          I got nothing but love, and I thank everything that has allowed me to see life in all shades of beautiful.
          Those of you who needs an eye-opener – well you may literally want to get an inspired &quot;sight&quot;.
          I&apos;ve found amazing contact lenses and ever since coming across them, I&apos;m a fan!
          Do you know that Avaira Vitality contact lenses doesn&apos;t just help you see better – it also combats astigmatism!
          Who says beauty and healing are two different concepts?
          I&apos;ve honestly been “seeing” a whole lot of change around me lately and I think it&apos;s because I&apos;m given an opportunity to have a fresher perspective.
          Yes, you cannot change the things beyond your control (like people&apos;s bad opinion of you). But you can definitely change how you react to them.
          So focus all your energy in things that matters – like loving yourself more and becoming the best version of you. Right?
        </p>
            </div>
            <div className={styles.link}>
              <button>
                <a href="/HOW_TO_CHANGE_YOUR_LIFE">Next </a>
              </button>
              </div>
              <div className={styles.back_button}>
            <button>
                 <a href="/60_HOURS_NO_SLEEP_IN_SOKOR">Back</a>
             </button>
            </div>
          </div>
          </div>
        </div>
      </div>
);
}
