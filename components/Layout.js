import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#363636" />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
});

export default Layout