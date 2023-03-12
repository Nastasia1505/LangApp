import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'

function Start() {
  const navigate = useNavigate()
  return <div className={styles.wrapper}>
    <div className={styles.header}>
      <img src={logo} alt='Logo' className={styles.logoHeader} />
      <button
        onClick={() => {
          navigate('/signin')
          window.scroll(0, 0)
        }}
        className={styles.secondaryBtn}>Log in</button>
    </div>
    <div className={styles.box}>
      <img src={logo} alt='Logo' className={styles.mailLogo} />
      <h2 className={styles.secondaryTitle}>a next-gen language platform</h2>
      <button
        onClick={() => {
          navigate('/signup')
          window.scroll(0, 0)
        }}
        className={styles.mainBtn}>Try for free</button>
    </div>
  </div>;
}

export default Start;
