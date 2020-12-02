import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Sidebar from './components/Sidebar';

import Welcome from './pages/Welcome';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Home from './pages/Home';
import Address from './pages/Address';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import About from './pages/About';

import NewAddress from './pages/NewAddress';
import Product from './pages/Product';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Dashboard() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Address" component={Address} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

function Login() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="NewAddress" component={NewAddress} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

export default Login;
