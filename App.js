/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';

const {width: deviceWidth} = Dimensions.get('window');

const colors = {
  background: '#06151C',
  lightGray: '#F4F5FB',
};

const spacing = [0, 5, 10, 15, 20, 25, 30, 40, 50];

const App = () => {
  useEffect(() => {
    Platform.OS === 'android' &&
      StatusBar.setBackgroundColor(colors.background);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.body}>
        <View style={styles.whiteBox}>
          <View style={styles.leftView} />
          <View style={styles.upperBox}>
            <View style={styles.blackBox} />
            <Text style={styles.sectionText}>Name</Text>
            <View style={styles.blackBox} />
          </View>
          <View style={styles.lowerBox}>
            <Text style={styles.sectionText}>Balance</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    height: 200,
    width: deviceWidth * 0.7,
    backgroundColor: 'white',
    borderRadius: spacing[4],
    overflow: 'hidden',
    position: 'relative',
  },
  leftView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: spacing[5],
    height: 200,
    backgroundColor: colors.lightGray,
  },
  upperBox: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: spacing[6],
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[5],
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  blackBox: {
    borderRadius: 10,
    height: 45,
    width: 45,
    backgroundColor: colors.background,
  },
  sectionText: {
    fontSize: 20,
  },
  lowerBox: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingVertical: spacing[5],
    borderTopRightRadius: spacing[6],
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
