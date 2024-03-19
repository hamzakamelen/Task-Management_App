import { useEffect, useState } from "react";
import Navigation from "./navigation/navigation"
import OnBoardingScreen from "./Screens/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  // const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(true)
  // const Stack = createNativeStackNavigator()
  // useEffect(
  //   async function fetchData() {
  //   const appData = await AsyncStorage.getItem('isAppFirstLaunched');
  //   if (appData == null) {
  //     setIsAppFirstLaunched(true);
  //     AsyncStorage.setItem('isAppFirstLaunched',  'false');
  //   } else {
  //     setIsAppFirstLaunched(false);
  //   }

  //   fetchData();
  //   // AsyncStorage.removeItem('isAppFirstLaunched');
  // }, []);

  return (
    <>
      {/* {isAppFirstLaunched != null && ( 
        isAppFirstLaunched ? (
          <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
          </Stack.Navigator>
          </NavigationContainer>
        ) : ( */}
      <Navigation />
      {/* )
      )} */}
    </>
  );

}

export default App