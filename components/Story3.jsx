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
                <img class={styles.card__image} src="3.png" alt="image"/>
                <div class={styles.card__content}>
                    <p>            Globe & MetaverseGo</p>
                    <p>            By: Val Jose Mendoza </p>
                </div>
        <div className={styles.message}>
         <div className={styles.word}>
          <p>
            Globe and MetaverseGo have announced a partnership to help bring Filipinos into the metaverse by making earning, purchasing, and exploring the metaverse more accessible to gamers and first-time web3 users.
            MetaverseGo is an all-in-one platform for the metaverse and with Globe partnering, they aim to eliminate barriers to entry by providing fast and easy access by only requiring a Globe mobile number.
            Globe subscribers were first introduced to MetaverseGo through their annual 917 #ExtraGDay last September.
            Globe subscribers get 1GB of free data allowance to experience the MetaverseGo app and exclusive features through their GO promos and FamSURF packages.
            The promo allows subscribers to discover games, join guilds, and own an NFT. It runs until August 29, 2023 and to learn more about the exclusive offer.
            MetaverseGo and Globe have also created 917 Gudi NFTs available as rewards through the GlobeOne App.
            The NFT served as the ticket to #GMusicFest at the Circuit Events Grounds last September 17. 
            This makes Globe the first telecom provider in the Philippines and the world to launch an NFT collection  (GDay NFT Collection) with utility in the real world.
            </p>
            </div>
            <div className={styles.link}>
              <button>
                <a href="/60_HOURS_NO_SLEEP_IN_SOKOR">Next </a>
              </button>
              </div>
              <div className={styles.back_button}>
            <button>
                <a href="/HOW_TO_OVERCOME_YOUR_FEAR_OF_FAILURE">Back</a>
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
);
}
