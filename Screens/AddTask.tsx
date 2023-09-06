import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/style'
import HMIcon from '../components/Icon'

const AddTask = ({navigation}:any) => {
  return (
    <>
      <View style={[styles.h100, styles.bgWhite]}>
        <View>
          <View style={[styles.bgWhite,styles.borderTop1,styles.borderLeft1,styles.borderRight1,styles.h40,{marginTop:'103%',borderTopLeftRadius:30,borderTopRightRadius:30}]}>
          <View style={[styles.flexColumn, styles.p2]}>
            <TouchableOpacity style={[styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "grey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>Add Task</Text>
              <View style={[styles.border1, { marginLeft: '65%', borderRadius: 20 }]}>
                <HMIcon name="navigate-next" color="black" size={28} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mt2,styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "grey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>Create Team</Text>
              <View style={[styles.border1, { marginLeft: '55%', borderRadius: 20 }]}>
                <HMIcon name="navigate-next" color="black" size={28} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mt2,styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "grey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>My Projects</Text>
              <View style={[styles.border1, { marginLeft: '57%', borderRadius: 20 }]}>
                <HMIcon name="navigate-next" color="black" size={28} />
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Homes')} style={[styles.bgPrimary, styles.roundedPill, styles.p1, { height: 50, width: 50, marginLeft: '42%' }]}>
            <HMIcon name='add' size={30} color="white" />
          </TouchableOpacity >
        </View>
      </View></>
  )
}

export default AddTask