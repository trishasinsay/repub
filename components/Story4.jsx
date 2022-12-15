<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet">
</link>
</link>

import styles from "./Story.module.css";

export default function Story() {
     return(
        <div className={styles.container}>
            <div class={styles.cards}>
            <div class={styles.card}>
                <img class={styles.card__image} src="4.png" alt="image"/>
                <div class={styles.card__content}>
                    <p>           60 HOURS NO SLEEP IN </p>
                    <p>             SEOUL, SOUTH KOREA</p>
                    <p>                By: Laureen Uy </p>
                </div>
        <div className={styles.message}>
         <div className={styles.word}>
          <p>
            This was probably one of the most exciting things I&apos;ve done last year. I was invited to be part of Viu&apos;s new show called &quot;No Sleep, No FOMO&quot; that will be airing next month. 
            Basically, the show is all about how you can maximize your time in a new city/country if you only have less than 3 days there. 60 hours of no sleep might sound scary and tiring, 
            but I honestly had the best time with Paul Foster (the main host) and Nat Ho. We went to Seoul and literally did so many challenges– spicy noodle challenge, snowboarding, dance lessons 
            (my fave!), and a lot more. Honestly didn&apos;t want to do the snowboard challenge because it was my first time trying the sport and we had to go to the slope right away. Lol. Paul and Nat gave me encouraging words so I did it– but really I was forced. 
            Joke hahaha. I fell HARD plenty of times but managed to finish the challenge so hurray! We also took dance lessons. Ang SAYA ko dito because growing up I was always into music and dancing– hindi lang talaga ako magaling lol. 
            Catch No Sleep, No FOMO on Viu next month. Download the app! Excited for this episode to come out.
            </p>
            </div>
            <div className={styles.link}>
              <button>
                <a href="/HOW_TO_DEAL_WITH_TOXIC_PEOPLE">Next </a>
              </button>
              </div>
              <div className={styles.back_button}>
            <button>
                 <a href="/GLOBE_&_METAVERSEGO">Back</a>
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
);
}
