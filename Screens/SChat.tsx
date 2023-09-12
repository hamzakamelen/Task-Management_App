import { Image, ScrollView, Text, TextInput, View } from "react-native"
import styles from "../styles/style"
import HMIcon from "../components/Icon"
import { TouchableOpacity } from "react-native"

function SingleChat({ navigation }: any) {
    return (
        <>
            <View style={[styles.h100, styles.bgWhite]}>
                <View style={[styles.bgPrimary, styles.p1, styles.flexRow, { height: 70 }]}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={[{ marginTop: 13 }]}>
                        <HMIcon name="arrow-back-ios" size={24} color="white" />
                    </TouchableOpacity>
                    <Image style={{ height: 43, width: 43, borderRadius: 43, marginTop: 4 }} source={{ uri: 'data:image/jpeg;base64,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' }} />
                    <View style={[styles.flexColumn, styles.ms1]}>
                        <Text style={[styles.textWhite, styles.fs, { marginTop: 5 }]}>Hamza Kamelen</Text>
                        <View style={[styles.flexRow,]}>
                            <Text style={[{ color: 'lightgrey', fontSize: 14.5 }]}>Active now</Text>
                            <View style={[styles.border1, styles.mt, styles.ms, { height: 13, width: 13, backgroundColor: 'lightgreen', borderColor: 'lightgreen', borderRadius: 15 }]}></View>
                        </View>
                    </View>
                </View>
                <ScrollView style={[styles.bgTransparent, styles.h100]}>
                    <View style={[styles.mt,styles.mb]}>
                        <View style={[styles.mb1, styles.bgPrimary, styles.p1, styles.w75, styles.rounded, { marginLeft: '22%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.mb1, styles.bgPrimary, styles.p1, styles.w75, styles.rounded, { marginLeft: '22%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.mb1, styles.bgPrimary, styles.p1, styles.w75, styles.rounded, { marginLeft: '22%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.bgPrimary, styles.flexRow, styles.p1]}>
                    <TouchableOpacity style={[styles.ms, styles.mt1]}>
                        <HMIcon name="add-a-photo" size={30} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.ms1, styles.mt1]}>
                        <HMIcon name="photo-library" size={30} color='white' />
                    </TouchableOpacity>
                    <TextInput multiline style={[styles.border1, styles.fs, styles.p1, styles.roundedPill, styles.bgTransparent, styles.ms, { width: 225, borderColor: 'lightgrey', }]} placeholder="Write a Message" placeholderTextColor='white' />
                    <TouchableOpacity style={[styles.ms, styles.mt1]}>
                        <HMIcon name="send" size={30} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default SingleChat
