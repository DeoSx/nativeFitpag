import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = (props: any) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="to Detail"
        color="black"
        onPress={() => props.navigation.push('Detail')}
      />
    </View>
  );
};

export default Home;
