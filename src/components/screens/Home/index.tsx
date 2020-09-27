import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Text>Home screen</Text>
        <Button
          title="to Detail"
          color="black"
          onPress={() => navigation.push('Auth')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
