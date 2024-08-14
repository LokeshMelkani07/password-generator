import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Yup for form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(10, 'Should be max of 10 characters')
    .required('Password is required'),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
