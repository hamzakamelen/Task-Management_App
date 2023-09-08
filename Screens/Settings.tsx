import { Switch, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"
import { Text } from "react-native"
import HMIcon from "../components/Icon"
import { useState } from "react";

function Settings({navigation}:any) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
            <View style={[styles.h100, styles.p2, styles.bgWhite]}>
                <View style={[styles.mt1]}>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Permission</Text>
                        <Switch
                            style={[{ marginLeft: '51%' }]}
                            trackColor={{ false: 'grey', true: '#6f6aee' }}
                            thumbColor={isEnabled ? 'white' : 'white'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={[styles.flexRow,styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[ styles.textBlack, styles.fs5]}>Push Notification</Text>
                        <Switch
                            style={[{ marginLeft: '34%' }]}
                            trackColor={{ false: 'grey', true: '#6f6aee' }}
                            thumbColor={isEnabled ? 'white' : 'white'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Dark Mode</Text>
                        <Switch
                            style={[{ marginLeft: '53%' }]}
                            trackColor={{ false: 'grey', true: '#6f6aee' }}
                            thumbColor={isEnabled ? 'white' : 'white'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Security</Text>
                        <View style={[{ marginLeft: '72%', marginTop: 3 }]}>
                            <HMIcon name='arrow-forward-ios' size={20} color='grey' />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Help</Text>
                        <View style={[{ marginLeft: '82%', marginTop: 3 }]}>
                            <HMIcon name='arrow-forward-ios' size={20} color='grey' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Language')} style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Language</Text>
                        <View style={[{ marginLeft: '67%', marginTop: 3 }]}>
                            <HMIcon name='arrow-forward-ios' size={20} color='grey' />
                        </View>
                    </TouchableOpacity>

                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>About Application</Text>
                        <View style={[{ marginLeft: '45%', marginTop: 3 }]}>
                            <HMIcon name='arrow-forward-ios' size={20} color='grey' />
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}
export default Settings