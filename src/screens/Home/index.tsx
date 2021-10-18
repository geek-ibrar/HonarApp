import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Color } from '../../common/Theme';
import Categories from '../../components/Categories';
import FreeCourses from '../../components/FreeCourses';
import Header from '../../components/Header';
import { StackNav } from "../../common/Types";
import { ParamListBase } from '@react-navigation/routers';


interface HomeProps {
    navigation: NativeStackNavigationProp<ParamListBase, 'Home'>
}

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.textLg}>Start{'\n'}Learning</Text>

                    <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode="center" />
                </View>

                <Categories navigation={navigation} />
                <FreeCourses navigation={navigation} />
            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.Background
    },
    content: {},
    row: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textLg: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        textAlignVertical: 'center',
    },
    logo: {
        right: 0,
        width: 130,
        resizeMode: 'center',
        height: 100
    }
});
