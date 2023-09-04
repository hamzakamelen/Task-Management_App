import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"
import { Image } from "react-native"

function Login({ navigation }: any) {
    return (
        <>
        <KeyboardAvoidingView>
            <View style={[styles.bgWhite, styles.h100]}>
                <Text style={[styles.fs2, styles.ms2, styles.my4, styles.textBlack, styles.textBold]}>Welcome Back!</Text>
                <Text style={[styles.fs5, styles.ms2, styles.textBlack]}>Please Enter your email address and password for Login</Text>
                <TextInput style={[styles.ms2, styles.my4, styles.p1, styles.border1, { width: '89%', borderRadius: 16, borderColor: "lightgrey",fontSize:17,color:"black" }]} placeholder="Enter your Email" placeholderTextColor="grey" />
                <TextInput style={[styles.ms2, styles.p1, styles.border1, { width: '89%', borderRadius: 16, marginTop: -10, borderColor: "lightgrey",fontSize:17,color:"black" }]} placeholder="Enter your password" placeholderTextColor="grey" />
                <Text style={[styles.my1, styles.textBlack, { marginLeft: 210, fontSize: 16 }]}>Forgot Password?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.p1, styles.m2, styles.bgPrimary, styles.shadow6, styles.my1, { shadowColor: "#6f6aee", borderRadius: 15 }]}>
                    <Text style={[styles.fs4, styles.textBold, styles.textCenter, styles.textWhite]}>Sign In</Text>
                </TouchableOpacity>
                <Text style={[styles.my2,{ color: "grey", fontSize: 18, textAlign: 'center' }]}>Signin with</Text>
               <View style={[styles.mb3,styles.flexRow]}>
                <TouchableOpacity style={[styles.border1,{ marginLeft:90,borderRadius:15 ,width: '17%',borderColor:'lightgrey'}]}>
                    <Image style={[{ height: 60, width: 60}]} source={{ uri: 'https://support.bluebeam.com/wp-content/uploads/2016/04/apple_logo_4096x4096_black.png' }} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.border1,{ marginLeft:40,borderRadius:15 ,width: '17%',borderColor:'lightgrey'}]}>
                    <Image style={[{ height: 60, width: 60}]} source={{ uri: 'https://i1.wp.com/www.teguhonline7.com/wp-content/uploads/2016/07/google-icon.png?fit=1125%2C1125' }} />
                </TouchableOpacity>
               </View>

                <Text style={{ color: "grey", fontSize: 18, textAlign: 'center' }}>Not Registered Yet?
                    <Text onPress={() => navigation.navigate('SignUp')} style={[styles.textPrimary,{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }]}> Sign Up</Text>
                </Text>
            </View>
            </KeyboardAvoidingView>
        </>
    )
}
export default Login