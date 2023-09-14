import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/style'
import HMIcon from '../components/Icon'

const AddTask = ({navigation}:any) => {
  return (
    <>
      <View style={[styles.h100, styles.bgPrimary]}>
        <View>
          <View style={[styles.bgWhite,styles.borderTop1,styles.borderLeft1,styles.borderRight1,styles.h50,{marginTop:'103%',borderColor:'darkgrey',borderTopLeftRadius:30,borderTopRightRadius:30}]}>
          <View style={[styles.flexColumn,styles.mt2, styles.p2]}>
            <TouchableOpacity style={[styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "darkgrey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>Add Task</Text>
              <View style={[styles.border1, {borderColor:'lightgrey',marginLeft: '65%', borderRadius: 20 }]}>
                <HMIcon name="navigate-next" color="black" size={28} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mt1,styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "darkgrey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>Create Team</Text>
              <View style={[styles.border1, {borderColor:'lightgrey',marginLeft: '55%', borderRadius: 20 }]}>
                <HMIcon name="navigate-next" color="black" size={28} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Projects')} style={[styles.mt1,styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "darkgrey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>My Projects</Text>
              <View style={[styles.border1, {borderColor:'lightgrey',marginLeft: '57%', borderRadius: 20 }]}>
                <HMIcon name="navigate-next" color="black" size={28} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Homes')} style={[styles.bgPrimary, styles.roundedPill, styles.p1, { marginTop:-5,height: 50, width: 50, marginLeft: '42%' }]}>
            <HMIcon name='close' size={30} color="white" />
          </TouchableOpacity >
          </View>

        </View>
      </View></>
  )
}

export default AddTask