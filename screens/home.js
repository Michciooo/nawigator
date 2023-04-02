import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [inputs, setInputs] = useState({
    tytul: '',
    tresc: '',
  });
  const [notifications, setNotifications] = useState([]);
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const data = { tytul: inputs.tytul, tresc: inputs.tresc };
    setNotifications([...notifications, data]);
    navigation.navigate('Alerts', { data });
    setInputs({ tytul: '', tresc: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FORMULARZ ALERTÓW</Text>
      <View>
        <Text style={styles.label}>Podaj tytuł powiadomienia :</Text>
        <TextInput
          id="tytul"
          type="text"
          onChangeText={(text) => handleChange('tytul', text)}
          value={inputs.tytul}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Podaj treść powiadomienia :</Text>
        <TextInput
          id="tresc"
          type="text"
          onChangeText={(text) => handleChange('tresc', text)}
          value={inputs.tresc}
          style={styles.input}
        />
      </View>
      
      <Button title="Wyślij" onPress={handleSubmit} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: 'black',
    height: '100%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    color: 'black',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 3,
    padding: 5,
  },
});