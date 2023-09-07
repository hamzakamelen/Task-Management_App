import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Splash from '../Screens/Splash';
import Intro1 from '../Screens/Intro1';
import Intro2 from '../Screens/Intro2';
import Intro3 from '../Screens/Intro3';
import TabNavigation from './tabnavigation';
import Home from '../Screens/Home';
const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{
                    headerShown: false
                }} name="Splash" component={Splash} />

                <Stack.Screen options={{
                    headerShown: false
                }} name="Intro1" component={Intro1} />

                <Stack.Screen options={{
                    headerShown: false
                }} name="Intro2" component={Intro2} />

                <Stack.Screen options={{
                    headerShown: false
                }} name="Intro3" component={Intro3} />

                <Stack.Screen options={{
                    headerShown: true,
                    headerBackVisible:false,
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTitle: "Sign In",
                }} name="Login" component={Login} />

                <Stack.Screen options={{
                    headerShown: true,
                    headerBackVisible:false,
                    headerTitleAlign: "center",
                    headerShadowVisible: false
                }} name="SignUp" component={Signup} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="Home" component={TabNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation