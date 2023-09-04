import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"

function Intro1({navigation}:any){
    return(
        <>
        <Image source={require('../Assets/intro1.png')} />
        <Text style={[styles.fs2,{color:'blue'},styles.ms3,]}>Task Management</Text>
        <View style={[styles.my1,]}>            
        <Text style={[styles.fs1,styles.ms3,{color:'darkblue'}]}>Let's Create a</Text>
        <Text style={[styles.fs1,styles.ms3,{color:'darkblue'}]}><Text style={[styles.textInfo,styles.textBold]}>space </Text> for your</Text>
        <Text style={[styles.fs1,styles.ms3,{color:'darkblue'}]}>Workflows.</Text>
        </View>
        <View style={[styles.flexRow]}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={[styles.textBlack,styles.ms3,styles.my1,styles.fs4,{color:'blue'}]}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Intro2')}>
            <Text style={[styles.textBlack,styles.my1,styles.fs4,{marginLeft:220}]}>Next</Text>
        </TouchableOpacity>
        </View>

        </>
    )
}
export default Intro1