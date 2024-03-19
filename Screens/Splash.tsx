import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"

function Splash({ navigation }: any) {
    return (
        <>
            <View style={[styles.bgPrimary]}>
                <Image style={{ height: 350, width: '100%' }} source={require('../Assets/cover.png')} />
                <View style={[styles.bgWhite, styles.p3, styles.h60, { borderTopRightRadius: 50, borderTopLeftRadius: 50 }]}>
                    <Text style={[styles.textBold, { fontSize: 40 }, styles.textPrimary, styles.my1, styles.textCenter]}>Taskcy</Text>
                    <Text style={[styles.fs1, styles.textBlack, styles.textBold, styles.textCenter]}>Building Better</Text>
                    <Text style={[styles.fs1, styles.textBlack, styles.textBold, styles.textCenter]}>Workplaces</Text>
                    <Text style={[styles.flexCenter, styles.my1, styles.justifyContentCenter, styles.fs, styles.textBold, { color: "darkgrey", marginLeft: 32 }]}>Create a unique emotional story that describe better than words</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Intro1')} style={[styles.shadowEx, styles.bgPrimary, styles.w100, styles.my2, styles.justifyContentCenter, { borderRadius: 20, shadowOpacity: 1, shadowColor: '#6f6aee', height: 50 }]}>
                        <Text style={[styles.textCenter, styles.textBold, styles.fs4, styles.textWhite]}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default Splash