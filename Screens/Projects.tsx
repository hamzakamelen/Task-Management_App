import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from '../styles/style'
import HMIcon from '../components/Icon';

function Projects() {
  return (
    <>
      <View style={[styles.h100, styles.bgWhite,styles.p2]}>
        <TextInput style={[styles.input]} placeholder='Search' placeholderTextColor='grey'  />
      </View>
    </>
  )
}

export default Projects