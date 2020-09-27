import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Button, Container, Text, View} from 'native-base';
import {connect, ConnectedProps} from 'react-redux';

import LoginScreen from './Login';
import RegistrationScreen from './Register';

import {authRegister, authLogin} from '../../../store/auth/auth.api';
import {SignIn, SignUp} from '../../../types/auth';

type AuthScreenProps = {
  navigation: any;
} & PropsFromRedux;

type LoginState = boolean;

const mapDispatchToProps = (dispatch: any) => {
  return {
    register: (data: SignUp) => dispatch(authRegister(data)),
    login: (data: SignIn) => dispatch(authLogin(data)),
  };
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Auth: React.FC<AuthScreenProps> = (props) => {
  const [login, setLogin] = useState<LoginState>(false);

  return (
    <ScrollView>
      <Container>
        {login ? (
          <LoginScreen handler={props.login} />
        ) : (
          <RegistrationScreen handler={props.register} />
        )}

        <View>
          <Button transparent onPress={() => setLogin(!login)}>
            <Text>{login ? 'To Registration' : 'To Login'}</Text>
          </Button>
        </View>
      </Container>
    </ScrollView>
  );
};

export const style = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
  },
  buttons: {
    marginTop: 15,
    paddingLeft: 15,
  },
});

export default connect(null, mapDispatchToProps)(Auth);
