import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AdMobInterstitial } from 'expo-ads-admob';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  useEffect(() => {
    // Use the test ad unit ID
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    
    const loadAd = async () => {
      try {
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();
      } catch (error) {
        console.log(error);
      }
    };

    loadAd();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});