// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const FirstScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    gap:20
  },
});

export default FirstScreen;
