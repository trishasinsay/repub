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
                <img class={styles.card__image} src="2.png" alt="image"/>
                <div class={styles.card__content}>
                    <p>          HOW TO OVERCOME YOUR</p>
                    <p>               FEAR OF FAILURE </p>
                    <p>            by Mridula Nimawat</p>
                </div>
        <div className={styles.message}>
         <div className={styles.word}>
          <p>&quot;Success is not final, failure isn&apos;t fatal, it is the courage to continue that counts&quot;
              as once quoted by Winston Churchill.
              It is often seen that whenever we act on something we weigh it as success or failure. This leads us in believing that the result has to be either positive or the rest is just wasted effort. 
              The fear of failure is the reason several times we give up on trying. However, it should not be the case, and therefore, we tell you how to overcome your fears. One must focus on learning 
              as well in the path of approaching a task. Our mindset is all that equips us to believe in something, and therefore, one should deal with the 
              fear of failure in a positive way.
              &quot;True Success Is Overcoming The Fear Of Failure&quot;
              A number of times we see that people get upset and give up on something after facing failure. It is in generic terms that one has to find that its path and must take all the failures along 
              as lessons. The fear of failure is so crippling for a few of us that it might block its way of trying ever again. Therefore, let&apos;s learn more about how to overcome the fear of failure in this post.
              Practice these methods whenever you feel the fear of failure overpowering your mind. How to overcome the fear of failure – take it as a part of life until it stops hurting you so badly and you can 
              look forward to work again. This is always going to help you grow and make progress in life.
            </p>
            </div>
            <div className={styles.link}>
              <button>
                <a href="/GLOBE_&_METAVERSEGO">Next </a>
              </button>
              </div>
              <div className={styles.back_button}>
            <button>
                   <a href="/UNTIL_FRIDAY_NIGHT">Back</a>
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
);
}
