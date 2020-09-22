import React from 'react';
import {View, Text, Button} from 'react-native';

const Detail = (props: any) => {
  return (
    <View>
      <Text>Detail screen</Text>
      <Button
        title="to Home"
        color="#000"
        onPress={() => props.navigation.push('Home')}
      />
    </View>
  );
};

export default Detail;
