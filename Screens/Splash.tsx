import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"

function Splash({navigation}:any){
    return(
        <>
        <View style={[{backgroundColor:'black'}]}>

        <Image style={{height:350,width:'100%'}} source={require('../Assets/cover.png')} />
        <View style={[styles.bgWhite,styles.h60,{borderTopRightRadius:50,borderTopLeftRadius:50}]}>
            <Text style={[styles.textBold,{fontSize:35},styles.textInfo,styles.my3,styles.textCenter]}>Taskcy</Text>
            <Text style={[styles.fs1,styles.textBlack,styles.textBold, styles.textCenter]}>Building Better</Text>
            <Text style={[styles.fs1,styles.textBlack,styles.textBold, styles.textCenter]}>Workplaces</Text>
            <Text style={[{color:"lightgrey",fontSize:15,marginLeft:25,marginRight:25}]}>Create a unique emotional story that describe bettert thsn words</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Intro1')} style={[styles.bgInfo,styles.w50,styles.my2,styles.justifyContentCenter,{marginLeft:80,borderRadius:20,height:50}]}>
            <Text style={[styles.textCenter,styles.textBold,styles.fs4,styles.textWhite]}>Get Started</Text>
        </TouchableOpacity>
        </View>
        </View>

        </>
    )
}
export default Splash