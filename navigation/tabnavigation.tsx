import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home"
import styles from '../styles/style';
import HMIcon from '../components/Icon';
import { Text, View } from 'react-native';
import Projects from '../Screens/Projects';
import AddTask from '../Screens/AddTask';
import Chat from '../Screens/Chat';
import Profile from '../Screens/Profile';

function TabNavigation() {
    const Tab = createBottomTabNavigator()
    return (
        <>
            <Tab.Navigator
                initialRouteName='Homes'
                screenOptions={{
                    tabBarActiveBackgroundColor: "white",
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        position: 'relative',
                        backgroundColor: "white",
                        borderColor: 'white',
                        left: 2,
                        right: 2,
                        bottom: 1,
                        borderRadius: 10,
                        elevation: 0,
                        height: 63,
                        ...styles.shadow3,

                    }
                }}
            >
                <Tab.Screen name="Homes" component={Home}
                    options={{
                        headerShown: true,
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                        headerTitle: "Friday, 26",
                        headerTitleStyle: {
                            backgroundColor:'white',
                        },
                        tabBarIcon: () => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                    <HMIcon name='home' size={30} color="grey" />
                                </View>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="Projects" component={Projects}
                    options={{
                        headerTitleStyle: {
                            backgroundColor:'white',
                        },
                        headerTitleAlign: "center",
                        tabBarIcon: () => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                    <HMIcon name='topic' size={30} color="grey" />
                                </View>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="AddTask" component={AddTask}
                    options={{
                        headerTitleStyle: {
                            backgroundColor:'white',
                        },
                        headerTitleAlign: "center",
                        tabBarIcon: () => (
                            <View>
                                <View style={[styles.bgPrimary,styles.roundedPill,styles.p1, { height:50,width:50 ,marginLeft: -4 }]}>
                                    <HMIcon name='add' size={30} color="white" />
                                </View>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="Chat" component={Chat}
                    options={{
                        headerTitleStyle: {
                            backgroundColor:'white',
                        },
                        headerTitleAlign: "center",
                        tabBarIcon: () => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                    <HMIcon name='sms' size={30} color="grey" />
                                </View>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        headerTitleStyle: {
                            backgroundColor:'white',
                        },
                        headerTitleAlign: "center",
                        tabBarIcon: () => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                    <HMIcon name='person-outline' size={30} color="grey" />
                                </View>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    )
}
export default TabNavigation