// import React, { useRef } from 'react'
// import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import styles from '../styles/style';
// import HMIcon from '../components/Icon';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const { width, height } = Dimensions.get('window');

// const slides = [
//     {
//         id: '1',
//         image: require('../Assets/intro1.png'),
//         title: "Let's create a",
//         dark: "space ",
//         subtitle: `for your ${<br />} workflows`,
//     },
//     {
//         id: '2',
//         image: require('../Assets/intro2.png'),
//         title: 'Work more',
//         dark: "Structured ",
//         subtitle: `and ${<br />} Organized👌`,
//     },
//     {
//         id: '3',
//         image: require('../Assets/intro3.png'),
//         title: 'Manage your',
//         dark: 'Tasks',
//         subtitle: `quickly for ${<br />} Results`,
//     },
// ];
// const Slide = ({ item }) => {
//     return (
//         <>
//             <Image source={item?.image} />
//             <Text style={[styles.fs4, styles.textPrimary, styles.ms3]}>Task Management</Text>
//             <View style={[styles.my1]}>
//                 <Text style={[styles.fs1, styles.ms3, styles.textBlack]}>{item?.title}</Text>
//                 <Text style={[styles.fs1, styles.ms3, styles.textBlack]}><Text style={[styles.textPrimary, styles.textBold]}>{item?.dark}</Text>{item?.subtitle}</Text>
//                 {/* <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>{item?.subtitle}</Text> */}
//             </View>
//         </>
//     );
// };


// const OnBoardingScreen = ({ navigation }) => {
//     const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
//     const ref = useRef();

//     const updateCurrentSlideIndex = (e) => {
//         const contentOffsetX = e.nativeEvent.contentOffset.x;
//         const currentIndex = Math.round(contentOffsetX / width);
//         setCurrentSlideIndex(currentIndex);
//     };

//     const goToNextSlide = () => {
//         const nextSlideIndex = currentSlideIndex + 1;
//         if (nextSlideIndex != slides.length) {
//             const offset = nextSlideIndex * width;
//             ref?.current.scrollToOffset({ offset });
//             setCurrentSlideIndex(currentSlideIndex + 1);
//         }
//     };

//     const skip = () => {
//         const lastSlideIndex = slides.length - 1;
//         const offset = lastSlideIndex * width;
//         ref?.current.scrollToOffset({ offset });
//         setCurrentSlideIndex(lastSlideIndex);
//     };
//     const Footer = () => {
//         return (
//             <View
//                 style={{
//                     height: height * 0.25,
//                     justifyContent: 'space-between',
//                     paddingHorizontal: 20,
//                 }}>
//                 {/* Indicator container */}
//                 <View
//                     style={{
//                         flexDirection: 'row',
//                         justifyContent: 'center',
//                         marginTop: 20,
//                     }}>
//                     {/* Render indicator */}
//                     {slides.map((_, index) => (
//                         <View
//                             key={index}
//                             style={[
//                                 stylesheet.indicator,
//                                 currentSlideIndex == index && {
//                                     backgroundColor: "#ffffff",
//                                     width: 25,
//                                 },
//                             ]}
//                         />
//                     ))}
//                 </View>

//                 {/* Render buttons */}
//                 <View style={{ marginBottom: 20 }}>
//                     {currentSlideIndex == slides.length - 1 ? (
//                         <View style={[styles.bgPrimary]}>
//                             <Image style={{ height: 350, width: '100%' }} source={require('../Assets/cover.png')} />
//                             <View style={[styles.bgWhite, styles.p3, styles.h60, { borderTopRightRadius: 50, borderTopLeftRadius: 50 }]}>
//                                 <Text style={[styles.textBold, { fontSize: 40 }, styles.textPrimary, styles.my1, styles.textCenter]}>Taskcy</Text>
//                                 <Text style={[styles.fs1, styles.textBlack, styles.textBold, styles.textCenter]}>Building Better</Text>
//                                 <Text style={[styles.fs1, styles.textBlack, styles.textBold, styles.textCenter]}>Workplaces</Text>
//                                 <Text style={[styles.flexCenter, styles.my1, styles.justifyContentCenter, styles.fs, styles.textBold, { color: "darkgrey", marginLeft: 32 }]}>Create a unique emotional story that describe better than words</Text>
//                                 <TouchableOpacity onPress={() => navigation.navigate('Intro1')} style={[styles.shadowEx, styles.bgPrimary, styles.w100, styles.my2, styles.justifyContentCenter, { borderRadius: 20, shadowOpacity: 1, shadowColor: '#6f6aee', height: 50 }]}>
//                                     <Text style={[styles.textCenter, styles.textBold, styles.fs4, styles.textWhite]}>Get Started</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     ) : (
//                         <View style={[styles.flexRow]}>
//                             <TouchableOpacity onPress={skip}>
//                                 <Text style={[styles.textBlack, styles.ms3, styles.mt2, styles.my1, styles.fs5]}>Skip</Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity onPress={goToNextSlide} style={[styles.bgPrimary, styles.flexCenter, styles.w100, { marginLeft: 180, height: 150, width: 110, marginTop: -40, borderTopLeftRadius: 250, borderBottomLeftRadius: 150 }]}>
//                                 <HMIcon name="arrow-forward" color="black" size={35} />
//                             </TouchableOpacity>
//                         </View>
//                     )}
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: '#6f6aee' }}>
//             <StatusBar backgroundColor={'#6f6aee'} />
//             <FlatList
//                 onMomentumScrollEnd={updateCurrentSlideIndex}
//                 contentContainerStyle={{ height: height * 0.75 }}
//                 showsHorizontalScrollIndicator={false}
//                 horizontal
//                 data={slides}
//                 pagingEnabled
//                 renderItem={({ item }) => <Slide item={item} />}
//             />
//             <Footer />
//         </SafeAreaView>
//     );
// }

// const stylesheet = StyleSheet.create({
//     indicator: {
//         height: 2.5,
//         width: 10,
//         backgroundColor: 'grey',
//         marginHorizontal: 3,
//         borderRadius: 2,
//     },
// })
// export default OnBoardingScreen















// // import { Image, Text, TouchableOpacity, View } from "react-native"
// // import styles from "../styles/style"
// // import HMIcon from "../components/Icon"

// // function Intro1({navigation}:any){
// //     return(
// //         <>
// //         <Image source={require('../Assets/intro1.png')} />
// //         <Text style={[styles.fs4,styles.textPrimary,styles.ms3]}>Task Management</Text>
// //         <View style={[styles.my1]}>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Let's create a</Text>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}><Text style={[styles.textPrimary,styles.textBold]}>space</Text> for your</Text>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>workflows.</Text>
// //         </View>
// //         <View style={[styles.flexRow]}>
// //         <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
// //             <Text style={[styles.textBlack,styles.ms3,styles.mt2,styles.my1,styles.fs5]}>Skip</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity onPress={()=>navigation.navigate('Intro2')} style={[styles.bgPrimary,styles.flexCenter,styles.w100,{marginLeft:180,height:150,width:110,marginTop:-40,borderTopLeftRadius:250,borderBottomLeftRadius:150}]}>
// //             <HMIcon name="arrow-forward" color="black" size={35} />
// //         </TouchableOpacity>
// //         </View>

// //         </>
// //     )
// // }
// // export default Intro1



// // import { Image, Text, TouchableOpacity, View } from "react-native"
// // import styles from "../styles/style"
// // import HMIcon from "../components/Icon"

// // function Intro2({navigation}:any){
// //     return(
// //         <>
// //         <Image source={require('../Assets/intro2.png')} />
// //         <Text style={[styles.fs4,styles.mt3,styles.textPrimary,styles.ms3]}>Task Management</Text>
// //         <View style={[styles.mt2]}>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Work more</Text>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}><Text style={[styles.textPrimary,styles.textBold]}>Structured </Text>and</Text>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Organized👌</Text>
// //         </View>
// //         <View style={[styles.flexRow,styles.mt2]}>
// //         <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
// //             <Text style={[styles.textBlack,styles.ms3,styles.mt2,styles.my1,styles.fs5]}>Skip</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity onPress={()=>navigation.navigate('Intro3')} style={[styles.bgPrimary,styles.flexCenter,styles.w100,{marginLeft:180,height:150,width:110,marginTop:-40,borderTopLeftRadius:250,borderBottomLeftRadius:150}]}>
// //             <HMIcon name="arrow-forward" color="black" size={35} />
// //         </TouchableOpacity>
// //         </View>

// //         </>
// //     )
// // }
// // export default Intro2

// // import { Image, Text, TouchableOpacity, View } from "react-native"
// // import styles from "../styles/style"
// // import HMIcon from "../components/Icon"

// // function Intro3({navigation}:any){
// //     return(
// //         <>
// //         <Image source={require('../Assets/intro3.png')} />
// //         <Text style={[styles.fs4,styles.mt3,styles.textPrimary,styles.ms3]}>Task Management</Text>
// //         <View style={[styles.mt2]}>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Manage your</Text>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}><Text style={[styles.textPrimary,styles.textBold]}>Tasks </Text>quickly for</Text>
// //         <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Results.</Text>
// //         </View>
// //         <View style={[styles.flexRow,styles.mt2]}>
// //         <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
// //             <Text style={[styles.textBlack,styles.ms3,styles.mt2,styles.my1,styles.fs5]}>Skip</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={[styles.bgPrimary,styles.flexCenter,styles.w100,{marginLeft:180,height:150,width:110,marginTop:-40,borderTopLeftRadius:250,borderBottomLeftRadius:150}]}>
// //             <HMIcon name="arrow-forward" color="black" size={35} />
// //         </TouchableOpacity>
// //         </View>

// //         </>
// //     )
// // }
// // export default Intro3