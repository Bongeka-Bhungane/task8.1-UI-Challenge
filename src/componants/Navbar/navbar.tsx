import React from 'react'
import { Text } from '../Text/Text'
import styles './navbar.css'

export const Navbar: React.FC<any> = (props) => {
    console.log({props});
  return (
    <nav>
    <div className={styles.content}>
      <Text variant="h1" style={{ color: "blue", textAlign: "center" }}>Hello World</Text>
      <div>
        <a href="/#" className={styles.link}>Home</a>
        <a href="/#" className={styles.link}>Home</a>
        <a href="/#" className={styles.link}>Home</a>
        <div className={styles['profile-icon']}>
        <Text variant={'span'}>U</Text>
        </div>
      </div>
    </div>
    </nav>
    
  );
}
