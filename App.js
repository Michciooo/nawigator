import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home' ;
import AlertScreen from './screens/alert' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
const BottomTabs =createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Home" 
                       component={HomeScreen} 
                       options = {{
                        headerStyle:
                        {
                          backgroundColor:'black'
                        },
                       headerTintColor:'white',
                        tabBarIcon: (color , size) => (
                          <Entypo name="home" size={24} color="black" />)
                       }}
                      
        />
        <BottomTabs.Screen name="Alerts" component={AlertScreen}
        options=
        {{
          headerStyle:{
            backgroundColor:'red'
          },
          headerTintColor:'white',
          tabBarIcon:(color,size)=>(
          <MaterialCommunityIcons name="home-alert" size={24} color="red" />
        )}}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#332626',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
