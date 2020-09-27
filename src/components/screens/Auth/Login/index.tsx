import React from 'react';
import {View, Text, Button, Form, Input, Item, Label} from 'native-base';

import {style} from '../index';
import {SignIn} from '../../../../types/auth';

interface LoginProps {
  handler: (data: SignIn) => void;
}

const LoginScreen: React.FC<LoginProps> = () => {
  return (
    <View style={style.container}>
      <Form>
        <Text style={style.title}>Login</Text>
        <Item>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input secureTextEntry={true} />
        </Item>
        <View style={style.buttons}>
          <Button>
            <Text>Login</Text>
          </Button>
        </View>
      </Form>
    </View>
  );
};

export default LoginScreen;
