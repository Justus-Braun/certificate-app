import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
//import { ViewPager } from 'expo-viewpager;
import ViewPager from '@react-native-community/viewpager';

export function OpenHistory() {
      return (
    <View style={{ flex: 1 }}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First Certificate</Text>
            <Image
             style={styles.logo}
             source={{
              uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
               }}
              />
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second Certificate</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third Certificate</Text>
        </View>
      </ViewPager>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  container: {
    paddingTop: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
