import { useRef, useState } from 'react'

import styles from './styles.module.scss'

function Translator() {
  const [translation, setTranslation] = useState('')
  const inputValue = useRef()
  const onClick = () => {
    fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        const translator = {
          word: response.word,
          translate: response.translate
        }
        setTranslation(translator.translate)
        console.log(translator)
      })
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Translator</h2>
      <div className={styles.contenerActive}>
        <input
          onKeyUp={onClick}
          ref={inputValue}
          className={styles.input}
          type="text"
          placeholder='Start writing text'></input>

        <div className={styles.translation}> {translation}</div>
      </div>
    </div>
  );
}

export default Translator;
