import React, {useState} from 'react';
import {View, Text, Button, Form, Input, Item, Label} from 'native-base';
import {TextInputChangeEventData, NativeSyntheticEvent} from 'react-native';

import {style} from '../index';
import {SignUp} from '../../../../types/auth';

interface RegisterProps {
  handler: (data: SignUp) => void;
}

const RegistScreen: React.FC<RegisterProps> = ({handler}) => {
  const [username, setUserName] = useState<SignUp['username']>('');
  const [first_name, setFirstName] = useState<SignUp['first_name']>('');
  const [last_name, setLastName] = useState<SignUp['last_name']>('');
  const [email, setEmail] = useState<SignUp['email']>('');
  const [password, setPassword] = useState<SignUp['password']>('');

  return (
    <View style={style.container}>
      <Form>
        <Text style={style.title}>Registration</Text>
        <Item>
          <Label>Username</Label>
          <Input
            onChange={(
              e: NativeSyntheticEvent<TextInputChangeEventData>,
            ): void => setUserName(e.nativeEvent.text)}
          />
        </Item>
        <Item>
          <Label>First name</Label>
          <Input
            onChange={(
              e: NativeSyntheticEvent<TextInputChangeEventData>,
            ): void => setFirstName(e.nativeEvent.text)}
          />
        </Item>
        <Item>
          <Label>Last name</Label>
          <Input
            onChange={(
              e: NativeSyntheticEvent<TextInputChangeEventData>,
            ): void => setLastName(e.nativeEvent.text)}
          />
        </Item>
        <Item>
          <Label>E-mail</Label>
          <Input
            onChange={(
              e: NativeSyntheticEvent<TextInputChangeEventData>,
            ): void => setEmail(e.nativeEvent.text)}
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
          <Button
            onPress={() =>
              handler({username, first_name, last_name, email, password})
            }>
            <Text>Sign Up</Text>
          </Button>
        </View>
      </Form>
    </View>
  );
};

export default RegistScreen;
