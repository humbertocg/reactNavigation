import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {aboutParams} from '../types/aboutParam';

export type startProps = {
  value?: string;
};

export const Start = (props: NativeStackScreenProps<any>) => {
  const data: startProps = props.route.params ?? {value: ''};

  const param: aboutParams = {
    clienteId: 20,
    totalPagar: 500.0,
  };

  return (
    <View style={styles.conetenedor}>
      <Text>Start {data.value}</Text>
      <Button
        title="Go to About us"
        onPress={() => {
          props.navigation.navigate('About Us', param);
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

export default Start;
