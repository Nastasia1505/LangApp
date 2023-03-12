import { useState } from 'react'

import styles from './styles.module.scss'

function Learn({ library }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [progress, setProgress] = useState((100 / library.length))
  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word)
    speakInstance.voice = speechSynthesis.getVoices()[3]
    speechSynthesis.speak(speakInstance)
  }
  return (
    <>
      <div className={styles.progressBarContener}>
        <div className={styles.progressBar} style={{ width: `${progress}vw` }}></div>
      </div>
      <div className={styles.contener}>
        <div className={styles.learnWord}>
          <span className={styles.translate}> {library[wordIndex].word}</span>
          <h2 className={styles.translate}>{library[wordIndex].translate} </h2>
        </div>
        <div className={styles.box}>
          {library.length - 1 !== wordIndex && <button className={styles.btn} onClick={() => {
            setWordIndex((pre) => pre + 1)
            setProgress(progress + (100 / library.length))
          }}> Next </button>}
          <button className={styles.btn} onClick={() => {
            speak(library[wordIndex].translate)
          }}> Speak </button>
        </div>
      </div>
    </>
  );
}

export default Learn;