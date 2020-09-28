import React, {useState} from 'react';
import {TextInputChangeEventData, NativeSyntheticEvent} from 'react-native';
import {View, Text, Button, Form, Input, Item, Label} from 'native-base';

import {style} from '../index';
import {SignIn} from '../../../../types/auth';

interface LoginProps {
  handler: (data: SignIn) => void;
}

const LoginScreen: React.FC<LoginProps> = ({handler}) => {
  const [username, setUsername] = useState<SignIn['username']>('');
  const [password, setPassword] = useState<SignIn['password']>('');

  return (
    <View style={style.container}>
      <Form>
        <Text style={style.title}>Login</Text>
        <Item>
          <Label>Username</Label>
          <Input
            onChange={(
              e: NativeSyntheticEvent<TextInputChangeEventData>,
            ): void => setUsername(e.nativeEvent.text)}
          />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            onChange={(
              e: NativeSyntheticEvent<TextInputChangeEventData>,
            ): void => setPassword(e.nativeEvent.text)}
          />
        </Item>
        <View style={style.buttons}>
          <Button onPress={() => handler({username, password})}>
            <Text>Login</Text>
          </Button>
        </View>
      </Form>
    </View>
  );
};

export default LoginScreen;
