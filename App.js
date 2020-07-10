/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, Alert, Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Periyava Puranam</Text> 
      </View>
      <View style={styles.slider}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://mahaperiyava.org/beta/wp-content/uploads/2019/09/Mainslide-1280x720.jpg',
        }}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 175, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 200, height: 50, backgroundColor: 'skyblue'}} />
         
      </View> 
      
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  tinyLogo: {
    width: 380,
    height: 150,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 20,
    paddingRight: 12,
    textAlign: 'left',
    backgroundColor: '#c03145', 
    color: 'white', 
  },
  slider: {
    backgroundColor:'#dcdcdc',
    height:150,
  }
});

export default App;
