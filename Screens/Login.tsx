import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"
import { Image } from "react-native"
import { useState } from "react";
import axios from "axios";

function SignIn({ navigation }: any) {
    const Backend = 'https://spring-bud-clownfish-tie.cyclic.cloud/api/UserRouter/login'
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isLoading, setisLoading] = useState(false)
    const [Error, setError] = useState("")

    const LoginData = {
        email,
        password
    }

    const Submit = () => {
        setisLoading(true)
        if (Error) {
            setError("");
        }
        axios.post(Backend, LoginData).then((res) => {
            if (res.data.status === true) {
                navigation.navigate('Home')
                setisLoading(false)
            } else {
                setError(res.data.message);
                setisLoading(false)
            }
        }).catch((err) => {
            console.log(err)
            setError("An Error occured Please try Again")
            setisLoading(false)
        })
    }

    return (
        <>
            {/* {isLoading ?? <View style={[styles.flexCenter]}> <ActivityIndicator /> </View> : */}
            {/* <View style={[styles.bgWhite,{marginTop:500}]}>
            <ActivityIndicator size="large" animating={true} />
            </View> */}
            <View style={[styles.bgWhite, styles.p2, styles.h100]}>
                <Text style={[styles.fs2, styles.mt, styles.textBlack, styles.textBold]}>Welcome Back!</Text>
                <Text style={[styles.fs, styles.mt1, { color: 'grey' }]}>Please Enter your Email address and Password for Login</Text>
                <TextInput onChangeText={(e) => setemail(e)} style={[styles.mt3, styles.p1, styles.border1, { width: '98%', borderRadius: 16, borderColor: "lightgrey", fontSize: 16.2, color: "black" }]} placeholder="Enter your email" placeholderTextColor="grey" />
                <TextInput onChangeText={(e) => setpassword(e)} style={[styles.mt2, styles.p1, styles.border1, { width: '98%', borderRadius: 16, borderColor: "lightgrey", fontSize: 16.2, color: "black" }]} placeholder="Enter your password" placeholderTextColor="grey" />
                <Text style={[styles.mt2, styles.mb1, styles.textBlack, { marginLeft: 180, fontSize: 16 }]}>Forgot password?</Text>
                <TouchableOpacity onPress={() => Submit()} style={[styles.shadowEx, styles.p1, styles.my1, styles.bgPrimary, { shadowColor: "#6f6aee", borderRadius: 15 }]}>
                    <Text style={[styles.fs4, styles.textBold, styles.textCenter, styles.textWhite]}>Sign In</Text>
                </TouchableOpacity>
                {Error && <Text style={[styles.bgDanger, styles.p, styles.textWhite]}>Error: {Error}</Text>}
                <Text style={[styles.mt2, { color: "grey", fontSize: 18, textAlign: 'center' }]}>Signin with</Text>
                <View style={[styles.my3, styles.flexRow]}>
                    <TouchableOpacity style={[styles.border1, { marginLeft: 90, borderRadius: 15, width: '17%', borderColor: 'lightgrey' }]}>
                        <Image style={[{ marginLeft: -3.2, height: 60, width: 60 }]} source={{ uri: 'https://support.bluebeam.com/wp-content/uploads/2016/04/apple_logo_4096x4096_black.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.border1, { marginLeft: 40, borderRadius: 15, width: '17%', borderColor: 'lightgrey' }]}>
                        <Image style={[{ marginLeft: -3, height: 60, width: 60 }]} source={{ uri: 'https://i1.wp.com/www.teguhonline7.com/wp-content/uploads/2016/07/google-icon.png?fit=1125%2C1125' }} />
                    </TouchableOpacity>
                </View>

                <Text style={{ marginTop: 5, color: "grey", fontSize: 18, textAlign: 'center' }}>Not Registered Yet?
                    <Text onPress={() => navigation.navigate('SignUp')} style={[styles.textPrimary, { fontWeight: 'bold', fontSize: 18, textAlign: 'center' }]}> Sign Up</Text>
                </Text>
            </View>

        </>
    )
}
export default SignIn