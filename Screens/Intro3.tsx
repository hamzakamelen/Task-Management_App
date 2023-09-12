import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"
import HMIcon from "../components/Icon"

function Intro3({navigation}:any){
    return(
        <>
        <Image source={require('../Assets/intro3.png')} />
        <Text style={[styles.fs4,styles.mt3,styles.textPrimary,styles.ms3]}>Task Management</Text>
        <View style={[styles.mt2]}>            
        <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Manage your</Text>
        <Text style={[styles.fs1,styles.ms3,styles.textBlack]}><Text style={[styles.textPrimary,styles.textBold]}>Tasks </Text>quickly for</Text>
        <Text style={[styles.fs1,styles.ms3,styles.textBlack]}>Results.</Text>
        </View>
        <View style={[styles.flexRow,styles.mt2]}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <Text style={[styles.textBlack,styles.ms3,styles.mt2,styles.my1,styles.fs5]}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={[styles.bgPrimary,styles.flexCenter,styles.w100,{marginLeft:180,height:150,width:110,marginTop:-40,borderTopLeftRadius:250,borderBottomLeftRadius:150}]}>
            <HMIcon name="arrow-forward" color="black" size={35} />
        </TouchableOpacity>
        </View>

        </>
    )
}
export default Intro3