import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"

function Intro2({navigation}:any){
    return(
        <>
        <Image source={require('../Assets/intro2.png')} />
        <Text style={[styles.fs2,{color:'blue'},styles.ms3,styles.my5]}>Task Management</Text>
        <View style={[{marginTop:-30}]}>            
        <Text style={[styles.fs1,styles.ms3,{color:'darkblue'}]}>Work more</Text>
        <Text style={[styles.fs1,styles.ms3,{color:'darkblue'}]}><Text style={[styles.textInfo,styles.textBold]}>Structured </Text>and</Text>
        <Text style={[styles.fs1,styles.ms3,{color:'darkblue'}]}>Organized.</Text>
        </View>
        <View style={[styles.flexRow,styles.my1]}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={[styles.textBlack,styles.ms3,styles.my1,styles.fs4,{color:'blue'}]}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Intro3')}>
            <Text style={[styles.textBlack,styles.my1,styles.fs4,{marginLeft:220}]}>Next</Text>
        </TouchableOpacity>
        </View>

        </>
    )
}
export default Intro2