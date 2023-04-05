import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './pages/Home'
import SignScreen from './pages/sign'
import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator()
  
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />     
    </DrawerContentScrollView>
  );
}
  
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="ISLT" 
        component={HomeScreen} 
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009900',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center'
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Drawer.Screen 
        name="Signs" 
        component={SignScreen} 
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009900',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center'
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
