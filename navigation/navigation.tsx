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
import Settings from '../Screens/Settings';
import EditProfile from '../Screens/EditProfile';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/style';
import HMIcon from '../components/Icon';
import Language from '../Screens/Language';
const Navigation = ({navigation}:any) => {
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
                    headerBackVisible: false,
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTitle: "Sign In",
                }} name="Login" component={Login} />

                <Stack.Screen options={{
                    headerShown: true,
                    headerBackVisible: false,
                    headerTitleAlign: "center",
                    headerShadowVisible: false
                }} name="SignUp" component={Signup} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="Home" component={TabNavigation} />

                <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    // headerBackVisible:true,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity style={[ styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <HMIcon name='arrow-back-ios-new' size={20} color="black" />
                        </TouchableOpacity>
                    ),
                }} name="Settings" component={Settings} />

                <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View style={[styles.ms1, styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <HMIcon name='arrow-back-ios-new' size={20} color="black" />
                        </View>
                    ),
                    headerRight:()=>(
                    <View style={[styles.ms2]}>
                    <Text onPress={()=>navigation.navigate('Profile')} style={[styles.textPrimary,styles.fs]}>Save</Text>
                    </View>
                    )
                }} name="EditProfile" component={EditProfile} />
                
                    <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    // headerBackVisible:true,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity style={[ styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <HMIcon name='arrow-back-ios-new' size={20} color="black" />
                        </TouchableOpacity>
                    ),
                }} name="Language" component={Language} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation