import React from 'react'
import {Text} from './Text/Text'
import './navbar.css'

export default function navbar(props) {
  return (
    <div className={StyleSheet.content}>
      <Text variant="h1" style={{ color: "blue", textAlign: "center" }}>
        Hello World
      </Text>
      <div>
        <a href="/#" className={StyleSheet.link}>Home</a>
        <a href="/#" className={StyleSheet.link}>Home</a>
        <a href="/#" className={StyleSheet.link}>Home</a>
      </div>
    </div>
  );
}
