import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Color } from '../common/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers';

interface FreeCoursesProps {
    navigation: NativeStackNavigationProp<ParamListBase, 'Home'>
}

const ListData = [
    { id: 1, title: 'Introduction to web development', lessons: '12', duration: '5h 20min', cover: require('../../assets/images/web.jpg') },
    { id: 2, title: 'Data Science', lessons: '14', duration: '6h 40min', cover: require('../../assets/images/data_science.jpg') },
    { id: 3, title: 'Marketing', lessons: '7', duration: '4h 55min', cover: require('../../assets/images/marketing.jpg') },
    { id: 4, title: 'Accounting', lessons: '8', duration: '7h 06min', cover: require('../../assets/images/account.jpg') },
]

const FreeCourses = ({ navigation }: FreeCoursesProps) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <Text style={styles.heading}>Free Courses</Text>

                <Text style={{ color: Color.Accent, marginRight: 5, fontSize: 12, fontWeight: '700' }}>View All Free Courses</Text>
                <FontAwesome5 name="arrow-right" color={Color.Accent} />
            </View>

            <FlatList
                data={ListData}
                horizontal
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `category-${item.id}`}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                        index == 0 && 
                        navigation.navigate('Player')
                    }}>
                        <View style={styles.box}>
                            <Image source={item.cover} style={styles.cover} />
                            <View style={styles.content}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.description}>{item.lessons} lessons</Text>
                                    <Text style={styles.description}>{item.duration}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <AntDesign name={'playcircleo'} size={30} color={Color.Accent} style={{ marginRight: 20, }} />
                                    <Text style={styles.title}>Start Now</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    );
};

export default FreeCourses;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    heading: {
        fontWeight: '700',
        fontSize: 16,
        flex: 1,
    },
    list: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    box: {
        width: 230,
        height: 250,
        borderRadius: 10,
        marginRight: 20,
        overflow: 'hidden',
        backgroundColor: Color.Yellow,
    },
    cover: {
        width: '100%',
        height: '45%',
        resizeMode: 'cover'
    },
    content: {
        height: '55%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: '700',
        fontSize: 13,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 10,
        color: 'gray',
    }
});
