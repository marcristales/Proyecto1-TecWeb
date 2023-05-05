import React from 'react'
import styles from './HeaderItem.module.css'

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className={styles.menuItems}>
        <Icon className={styles.icon}/>
        <span className={styles.item}>{name}</span>
    </div>
  )
}

export default HeaderItem