import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled47 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>

          <View style={styles.column1}></View>
          <View style={styles.column2}></View>
          <View style={styles.column3}></View>

        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  }
});
export default Untitled47;