import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'
import { UserModel } from 'moduls';

function Header() {
  const [isUserWindowOpen, setIsUserWindowOpen] = useState(false)
  const navigate = useNavigate()
  return <div className={styles.wrapper}>
    <div className={styles.header}>
      <img src={logo} alt='Logo' className={styles.logoHeader}
        onClick={() => {
          navigate('/home')
          window.scroll(0, 0)
        }} />
      <div className={styles.box}>
        <div className={styles.nav}>
          <div className={styles.link}
            onClick={() => {
              navigate('/learn')
              window.scroll(0, 0)
            }}
          >Learn</div>
          <div className={styles.link}
            onClick={() => {
              navigate('/library')
              window.scroll(0, 0)
            }}
          >Library</div>
          <div className={styles.link}
            onClick={() => {
              navigate('/translator')
              window.scroll(0, 0)
            }}
          >Translator</div>

        </div>
        <div className={styles.avatar}
          onClick={() => setIsUserWindowOpen(!isUserWindowOpen)}
        >

          {isUserWindowOpen && (
            <div className={styles.userMenu}>
              <button
                className={styles.btn}
                onClick={() => {
                  navigate('/settings')
                  window.scroll(0, 0)
                }}>Settings</button>
              <button
                className={styles.btn}
                onClick={() => {
                  UserModel.logOut()
                  navigate('/')
                  window.scroll(0, 0)
                }}>Log out</button>
            </div>
          )}
        </div>
        {/* <button
          onClick={() => {
            UserModel.logOut()
            navigate('/')
            window.scroll(0, 0)
          }}
          className={styles.secondaryBtn}>Log out</button> */}
      </div>

    </div>
  </div>
}

export default observer(Header);
