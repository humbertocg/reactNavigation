import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const AboutUs = (props: NativeStackScreenProps<any>) => {
  return (
    <View style={styles.conetenedor}>
      <Text>About Us</Text>
      <Text>Total a Pagar: {props.route.params?.totalPagar}</Text>
      <Button
        title="Back to Start"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conetenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutUs;
