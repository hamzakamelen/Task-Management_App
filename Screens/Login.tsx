import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"
import { Image } from "react-native"
import { useState } from "react";

function SignIn({ navigation }: any) {
    // const Backend = 'http://localhost:7000/api/UserRouter/login'
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    // const [Error, setError] = useState("")
    const LoginData = {
        Email,
        Password
    }

    const Submit = () => {
    // if(Error){
    //     setError("");
    // }
    // axios.post(Backend,LoginData).then((res)=>{
    //     if(res.data.status===true){
    navigation.navigate('Home')
    //         }else{
    //             setError(res.data.message);
    //         }
    //     }).catch((err)=>{
    //         console.log(err)
    //         setError("An Error occured Please try Again")
    //     })
    }

    return (
        <>
            <View style={[styles.bgWhite,styles.p2, styles.h100]}>
                <Text style={[styles.fs2, styles.mt, styles.textBlack, styles.textBold]}>Welcome Back!</Text>
                <Text style={[styles.fs,styles.mt1,{color:'grey'}]}>Please Enter your email address and password for Login</Text>
                <TextInput style={[styles.mt3, styles.p1, styles.border1, { width: '98%', borderRadius: 16, borderColor: "lightgrey", fontSize: 16.2, color: "black" }]} placeholder="Enter your Email" placeholderTextColor="grey" />
                <TextInput style={[styles.mt2,styles.p1, styles.border1, { width: '98%', borderRadius: 16,  borderColor: "lightgrey", fontSize: 16.2, color: "black" }]} placeholder="Enter your password" placeholderTextColor="grey" />
                <Text style={[styles.mt2,styles.mb1, styles.textBlack, { marginLeft: 180, fontSize: 16 }]}>Forgot Password?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.shadowEx, styles.p1, styles.my1, styles.bgPrimary, { shadowColor: "#6f6aee", borderRadius: 15 }]}>
                    <Text style={[styles.fs4, styles.textBold, styles.textCenter, styles.textWhite]}>Sign In</Text>
                </TouchableOpacity>
                {/* {Error && <Text style={[styles.bgDanger,styles.textWhite]}>Error: {Error}</Text>} */}
                <Text style={[styles.mt2, { color: "grey", fontSize: 18, textAlign: 'center' }]}>Signin with</Text>
                <View style={[styles.my3, styles.flexRow]}>
                    <TouchableOpacity style={[styles.border1, { marginLeft: 90, borderRadius: 15, width: '17%', borderColor: 'lightgrey' }]}>
                        <Image style={[{marginLeft:-3.2 ,height: 60, width: 60 }]} source={{ uri: 'https://support.bluebeam.com/wp-content/uploads/2016/04/apple_logo_4096x4096_black.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.border1, { marginLeft: 40, borderRadius: 15, width: '17%', borderColor: 'lightgrey' }]}>
                        <Image style={[{marginLeft:-3 ,height: 60, width: 60 }]} source={{ uri: 'https://i1.wp.com/www.teguhonline7.com/wp-content/uploads/2016/07/google-icon.png?fit=1125%2C1125' }} />
                    </TouchableOpacity>
                </View>

                <Text style={{ marginTop:5,color: "grey", fontSize: 18, textAlign: 'center' }}>Not Registered Yet?
                    <Text onPress={()=>navigation.navigate('SignUp')} style={[styles.textPrimary, { fontWeight: 'bold', fontSize: 18, textAlign: 'center' }]}> Sign Up</Text>
                </Text>
            </View>
        </>
    )
}
export default SignIn