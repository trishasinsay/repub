<>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
</>

import styles from "./Upload.module.css";


export default function Upload() {
  function messageInsert() {
    alert("Publication Successful")
   }
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'webapp')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dfe8j4qzr/image/upload',
      {
        method: 'POST',
        body: data
      }
    )

    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)

}
  
    return (
      <form action="/Titles" method="post">
        <div className={styles.container}>
            <div class={styles.cards}>
            <div class={styles.card}>
            <div class={styles.card__image}>
            <image src={image} alt = "Upload Image" />
            <input
            type="file"
            name="file"
            onChange={uploadImage}
            />
         <div className={styles.input}>
          <textarea id="mytext" rows="5"></textarea>
         <div className={styles.word}>
          <textarea id="mytext" rows="5"></textarea>
            </div>
            <div className={styles.save_button}>        
            <button onClick={messageInsert}> SAVE</button>
            </div>
            <div className={styles.quit_button}>
            <button>
              <a href="/Titles">QUIT </a>
            </button>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        </form>
    );
  }