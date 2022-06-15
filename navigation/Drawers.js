import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './screens/Profile';
import Bookmark from './screens/Bookmark';
import Barcode from './screens/Barcode';
import Meeting from './screens/Meeting';
import MainContainer from './MainContainer';
const Drawer = createDrawerNavigator();
function Drawers() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
           <Drawer.Screen name="Xr-Sci" component={ MainContainer } />
           <Drawer.Screen name="Profile" component={ Profile } />
           <Drawer.Screen name="BarCode" component={ Barcode } />
           <Drawer.Screen name="Bookmark" component={ Bookmark } />
           <Drawer.Screen name="Meeting" component={ Meeting } />
        </Drawer.Navigator>
  
      </NavigationContainer>
    );
  }
  
  export default Drawers;