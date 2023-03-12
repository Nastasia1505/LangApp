import { useRef, useState } from 'react'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import styles from './styles.module.scss'

function Library({ library, setLibrary, playWords, setPlayWords }) {

  const inputValue = useRef()

  const onClick = () => {
    const response = fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        const updateLibrary = [...library, { word: response.word, translate: response.translate, learn: 0 }];
        console.log(updateLibrary)
        setLibrary(updateLibrary)
        localStorage.setItem('library', JSON.stringify(updateLibrary));
      })

    inputValue.current.value = ''
  }

  const deleteWord = (id) => {
    setLibrary(library.filter((word, index) => index !== id))
    localStorage.setItem('library', JSON.stringify(library.filter((word, index) => index !== id)));
  }

  return (
    <div className={styles.library}>
      <h2 className={styles.title}>Add new word</h2>
      <div className={styles.contener}>
        <input
          ref={inputValue}
          className={styles.input}
          type="text"
          placeholder='Write a word' />
        <button
          onClick={onClick}
          className={styles.btn}
        >Enter</button>
      </div>
      <div className={styles.table}>
        <div className={styles.wordTable}>
          <div className={styles.tableTitle}>Word</div>
          <div className={styles.tableTitle}>Translation</div>
        </div>
        <div >
          {library.map((word, index) => (
            <ul key={index} className={styles.newWords}>
              <li>{word.word}</li>
              <li>{word.translate}</li>
              <div className={styles.remove} onClick={() => deleteWord(index)}>
                <DeleteOutlineIcon />
              </div>
            </ul>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;