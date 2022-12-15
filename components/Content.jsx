<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet"></link>
</link>

import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.container}>
        <div class={styles.cards}>
        <div class={styles.card}>
                <img class={styles.card__image} src="1.png" alt="image"/>
                <div class={styles.card__content}>
                     <a href="/UNTIL_FRIDAY_NIGHT"> UNTIL FRIDAY NIGHT</a>
                </div>
            <div class={styles.card1}>
                <img class={styles.card__image1} src="2.png" alt="image"/>
                <div class={styles.card__content1}>
                <a href="/HOW_TO_OVERCOME_YOUR_FEAR_OF_FAILURE">HOW TO OVERCOME YOUR</a>
                     <p>     FEAR OF FAILURE        </p>
                </div>
            </div>
            <div class={styles.card2}>
                <img class={styles.card__image2} src="3.png" alt="image"/>
                <div class={styles.card__content2}>
                      <a href="/GLOBE_&_METAVERSEGO">GLOBE & METAVERSEGO</a>
                </div>
            </div>
            <div class={styles.card3}>
                <img class={styles.card__image3} src="4.png" alt="image"/>
                <div class={styles.card__content3}>
                      <a href="/60_HOURS_NO_SLEEP_IN_SOKOR">60 HOURS NO SLEEP</a>
                     <p>IN SEOUL, SOUTH KOREA</p>
                </div>
            </div>
            <div class={styles.card4}>
                <img class={styles.card__image4} src="5.png" alt="image"/>
                <div class={styles.card__content4}>
                     <a href="/HOW_TO_DEAL_WITH_TOXIC_PEOPLE">  HOW TO DEAL WITH</a>
                     <p>HATERS/TOXIC PEOPLE</p>
                </div>
            <div class={styles.card5}>
                <img class={styles.card__image5} src="6.png" alt="image"/>
                <div class={styles.card__content5}>
                     <a href="/HOW_TO_CHANGE_YOUR_LIFE"> HOW TO CHANGE YOUR</a>
                     <p>LIFE WHEN NOTHING IS</p>
                     <p>     GOING YOUR WAY     </p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  );
}
