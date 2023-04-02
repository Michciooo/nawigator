import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AlertScreen = () => {
  const [alerts, setAlerts] = useState([]);
  const { params } = useRoute();

  useEffect(() => {
    if (params?.data) {
      const newAlert = { tytul: params.data.tytul, tresc: params.data.tresc };
      setAlerts([...alerts, newAlert]);
    }
  }, [params]);

  return (
    <View style={styles.strona}>
      {alerts.length > 0 ? (
        <View style={styles.powiadomienia}>
          {alerts.map((alert, index) => (
            <View key={index}>
                <Text style={styles.h2}>{alert.tytul}</Text>
                <Text style={styles.h3}>{alert.tresc}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View>
          <Text>
            <Text style={styles.brakpowiadomienia}>Brak powiadomień</Text>
          </Text>
        </View>
      )}
      
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  powiadomienia: {
    backgroundColor:'black',
    width:'40%',
    height:'auto',
  },
  brakpowiadomienia:{
    fontWeight:'bold',
    fontSize:'200%',
    color:'black',
  },
  strona: {
    height: '100%',
    backgroundColor: 'white',
    textAlign:'center'
  },
  h2: {
    color: 'white',
    fontSize:'200%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  h3: {
    color: 'white',
    fontSize:'100%',
    textAlign: 'left',
  },
});
