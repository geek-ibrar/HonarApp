import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Color } from '../../common/Theme';
import Header from '../../components/Header';

interface MyCoursesProps { }

const MyCourses = (props: MyCoursesProps) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.label}>My Courses</Text>
    </View>
  );
};

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Background
  },
  label:{
    marginTop: 20,
    alignSelf: 'center',
  }
});
