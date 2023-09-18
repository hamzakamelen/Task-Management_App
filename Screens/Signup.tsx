import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"
import { Image } from "react-native"
import { useState } from "react";
import axios from "axios";

function Signup({ navigation }: any) {
    const Backend = 'https://spring-bud-clownfish-tie.cyclic.cloud/api/UserRouter/signup'
    const [userName, setuserName] = useState<string>("");    
    const [email, setemail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [Error, setError] = useState<any>("")
    const SignupData={
        userName,
        email,
        password
    }
    const Submit = ()=>{
        if(Error){
            setError("");
        }
        axios.post(Backend,SignupData).then((res)=>{
            if(res.data.status===false){
                setError(res.data.message)
            }else{
                navigation.navigate('SignIn')
            }
        }).catch((err)=>{
            console.log(err)
            setError("An Error occured Please try Again")
        })
    }
    return (
        <>
        
            <View style={[styles.bgWhite,styles.h100]}>
                <Text style={[styles.fs2, styles.ms2, styles.mt4, styles.textBlack, styles.textBold]}>Create Account</Text>
                <Text style={[styles.fs5, styles.ms2,styles.mt2, styles.textBlack]}>Please Enter your email address and password for Signup</Text>
                <TextInput onChangeText={(e)=>setuserName(e)} style={[styles.ms2, styles.my4, styles.p1, styles.border1, { width: '89%', borderRadius: 16, borderColor: "lightgrey",fontSize:16.2,color:"black" }]} placeholder="Enter your Name"  placeholderTextColor="grey" />
                <TextInput onChangeText={(e)=>setemail(e)} style={[styles.ms2, styles.p1, styles.border1, { width: '89%', borderRadius: 16, borderColor: "lightgrey", marginTop: -24,fontSize:16.2,color:"black" }]} placeholder="Enter your Email" placeholderTextColor="grey" />
                <TextInput onChangeText={(e)=>setPassword(e)} style={[styles.ms2, styles.p1, styles.border1, { width: '89%', borderRadius: 16, marginTop: 14, borderColor: "lightgrey",fontSize:16.2,color:"black" }]} placeholder="Enter your password" placeholderTextColor="grey" />
                <TouchableOpacity onPress={()=>Submit()} style={[styles.shadowEx,styles.p1, styles.m2,styles.my3, styles.bgPrimary, {shadowColor:'#6f6aee' ,borderRadius: 15 }]}>
                    <Text style={[styles.fs4, styles.textBold, styles.textCenter, styles.textWhite]}>Sign Up</Text>
                </TouchableOpacity>
                {Error && <Text style={[styles.bgDanger,styles.textWhite]}>Error: {Error}</Text>}
                <Text style={[styles.mb2,{ marginTop:-9 ,color: "grey", fontSize: 18, textAlign: 'center' }]}>Signin with</Text>
               <View style={[styles.mb3,styles.flexRow]}>
                <TouchableOpacity style={[styles.border1,{ marginLeft:90,borderRadius:15 ,width: '17%',borderColor:'lightgrey'}]}>
                    <Image style={[{ height: 60, width: 60}]} source={{ uri: 'https://support.bluebeam.com/wp-content/uploads/2016/04/apple_logo_4096x4096_black.png' }} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.border1,{ marginLeft:40,borderRadius:15 ,width: '17%',borderColor:'lightgrey'}]}>
                    <Image style={[{ height: 60, width: 60}]} source={{ uri: 'https://i1.wp.com/www.teguhonline7.com/wp-content/uploads/2016/07/google-icon.png?fit=1125%2C1125' }} />
                </TouchableOpacity>
               </View>
                <Text style={{marginTop:-15 ,color: "grey", fontSize: 18, textAlign: 'center' }}>Have an account?
                    <Text onPress={() => navigation.navigate('SignIn')} style={{ fontWeight: 'bold', color: "#6f6aee", fontSize: 18, textAlign: 'center' }}> Sign In</Text>
                </Text>
            </View>
            
        </>
    )
}
export default Signup