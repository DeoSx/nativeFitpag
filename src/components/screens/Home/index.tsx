import React from 'react';
import {View, Text, Button} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="to Detail"
        color="black"
        onPress={() => navigation.push('Detail')}
      />
    </View>
  );
};

export default Home;
