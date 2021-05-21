import React, { useState } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

interface HeaderProps {
  toggleTheme: () => void
  darkTheme: boolean
}

export function Header({ toggleTheme, darkTheme }: HeaderProps) {
  return (
    <View style={darkTheme ? styles.darkHeader : styles.header}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={darkTheme ? styles.darkHeaderText : styles.headerText}>
          to.
        </Text>
        <Text
          style={[
            darkTheme ? styles.darkHeaderText : styles.headerText,
            { fontFamily: 'Poppins-SemiBold' },
          ]}
        >
          do
        </Text>
      </View>
      <TouchableOpacity
        onPress={toggleTheme}
        style={darkTheme ? styles.darkButton : styles.button}
      >
        <Text style={darkTheme ? styles.darkButtonText : styles.buttonText}>
          {darkTheme ? 'Dark' : 'Light'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    paddingHorizontal: 50,
    backgroundColor: '#273FAD',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  darkHeader: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    paddingHorizontal: 50,
    backgroundColor: '#483C67',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  darkHeaderText: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  darkButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  darkButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
})
