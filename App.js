import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const crypto = require('./crypto');
const secret = 'open-sesame';

export default class App extends React.Component {

  componentWillMount() {
    const hash = crypto.createHmac('sha256', secret)
        .update('abcdefg')
        .digest('hex');

    let cipher = crypto.createCipheriv('aes-256-cbc', '1234567890abcdefghijklmnopqrstuv', '1234567890123456');
    let encrypted = cipher.update('0x7e60b5e25234367a75aebbd8d9d18493a5b517b28c2fe3a41d60bd0b49f46a16', 'ascii', 'base64');
    console.log(encrypted)
    encrypted += cipher.final('base64');
    console.log(encrypted)

    console.log('jZyKKbEx6/bRRf0NLa2TzObvjQSPojNjgFiOZJSCZgrui1+Q35BmfhGlycEwR+g7KUK9OhmwQDkgrPi9uSSlQmp1sHMEr3ZgPc8Ot0Jhfys=\n')
    console.log(hash);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
