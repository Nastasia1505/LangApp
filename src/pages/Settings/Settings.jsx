import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import CloseIcon from '@mui/icons-material/Close';

import styles from './styles.module.scss'
import General from './General/General'
import { Security } from './Security'

function Settings() {
  const [isgeneralActive, setIsGeneralActive] = useState(true)
  const [isSecurityActive, setIsSecurityActive] = useState(false)
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.settings}>
            <SettingsRoundedIcon
              className={styles.settingsIcon}
              fontSize='medium'
            />
            <h1 className={styles.settingsTitle}>Settings</h1>
          </div>
          <Link to='/home'>
            <CloseIcon />
          </Link>
        </div>
        <div className={styles.contener}>
          <div className={styles.outerWrapper}>
            <div className={styles.nav}>
              <div
                onClick={() => {
                  setIsGeneralActive(true)
                  setIsSecurityActive(false)
                }}
                className={isgeneralActive ? styles.linkActive : styles.link}
              >
                <span className={styles.navText}>General</span>
              </div>
              <div
                onClick={() => {
                  setIsSecurityActive(true)
                  setIsGeneralActive(false)
                }}
                className={isSecurityActive ? styles.linkActive : styles.link}
              >
                <span className={styles.navText}>Security</span>
              </div>
              <div className={styles.dash}></div>
            </div>
          </div>
          <div>
            {isgeneralActive ? (
              <General />
            ) : (
              <Security />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
