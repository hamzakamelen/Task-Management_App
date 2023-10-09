import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/style'
import HMIcon from '../components/Icon'

const Add = ({ navigation }: any) => {
  return (
    <>
      <View style={[styles.h100, styles.bgPrimary]}>
        <View>
          <View style={[styles.bgWhite, styles.borderTop1, styles.borderLeft1, styles.borderRight1, styles.h80, { marginTop: '80%', borderColor: 'lightgrey', borderTopLeftRadius: 30, borderTopRightRadius: 30 }]}>
            <View style={[styles.flexColumn, styles.mt2, styles.p2]}>
              <TouchableOpacity onPress={() => navigation.navigate('AddTask')} style={[styles.flexRow, styles.border1, styles.mt1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <HMIcon name="edit-square" color="black" size={28} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}>Create Task</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Projects')} style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <HMIcon name="add-box" color="black" size={28} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}>Create Project</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CreateTeam')} style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <HMIcon name="groups" color="black" size={28} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}>Create Team</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Projects')} style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <HMIcon name="schedule" color="black" size={28} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}>Create Event</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Homes')} style={[styles.bgPrimary, styles.roundedPill, styles.p1, { marginTop: -5, height: 50, width: 50, marginLeft: '42%' }]}>
              <HMIcon name='close' size={30} color="white" />
            </TouchableOpacity >
          </View>

        </View>
      </View></>
  )
}

export default Add