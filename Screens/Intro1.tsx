import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"
import HMIcon from "../components/Icon"

function Intro1({navigation}:any){
    return(
        <>
        <Image source={require('../Assets/intro1.png')} />
        <Text style={[styles.fs4,styles.textPrimary,styles.ms3]}>Task Management</Text>
        <View style={[styles.my1]}>            
        <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Let's create a</Text>
        <Text style={[styles.fs1,styles.ms3,styles.textBlack]}><Text style={[styles.textPrimary,styles.textBold]}>space</Text> for your</Text>
        <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>workflows.</Text>
        </View>
        <View style={[styles.flexRow]}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={[styles.textBlack,styles.ms3,styles.mt2,styles.my1,styles.fs5]}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Intro2')} style={[styles.bgPrimary,styles.flexCenter,styles.w100,{marginLeft:180,height:150,width:110,marginTop:-40,borderTopLeftRadius:250,borderBottomLeftRadius:150}]}>
            <HMIcon name="arrow-forward" color="black" size={35} />
        </TouchableOpacity>
        </View>

        </>
    )
}
export default Intro1