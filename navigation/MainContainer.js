import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import HomeScreen from './screens/HomeScreen';
import Map from './screens/Map';
import Visit from './screens/Visit';
import Match from './screens/Match';

//Screen names
const homeName = "Home";
const MapsName = "Map";
const VisitName = "Visit";
const MatchName = "Match";

const Tab = createBottomTabNavigator();
function MainContainer() {
  return (

      <Tab.Navigator         
        initialRouteName={homeName}
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === MapsName) {
              iconName = focused ? 'locate' : 'locate-outline';

            } else if (rn === VisitName) {
              iconName = focused ? 'today' : 'today-outline';
            } else if (rn === MatchName) {
                iconName = focused ? 'people' : 'people-outline';
            }
  

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }, activeTintColor: 'blue',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70},
        })} >

        <Tab.Screen name={homeName}  options={{headerShown: false}}   component={HomeScreen} />
        <Tab.Screen name={VisitName}   options={{headerShown: false}}  component={Visit} />
        <Tab.Screen name={MapsName}    options={{headerShown: false}} component={Map} />
        <Tab.Screen name={MatchName}   options={{headerShown: false}}  component={Match} />
      </Tab.Navigator> 
  );
}

export default MainContainer;