import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, StatusBar, SectionList, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';
import { AntDesign, Feather } from "@expo/vector-icons";

import { Color } from '../common/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers';

interface PlayerProps {
    navigation: NativeStackNavigationProp<ParamListBase, 'Home'>
}


const SIDEBAR_WIDTH = 250
const Player = ({ navigation }: PlayerProps) => {
    const [hideSidebar, setHideSidebar] = React.useState(true)

    React.useEffect(() => {
        ScreenOrientation
            .lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)

        return () => { ScreenOrientation.unlockAsync() }
    }, [])

    const toggleSidebar = () => {
        setHideSidebar(!hideSidebar)
    }

    const Item = ({ item }: any) => (
        <TouchableOpacity disabled={!item.isPlaying}>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Text style={[styles.title, { opacity: item.isPlaying ? 1 : 0.3 }]}>{item.title}</Text>
                    <View style={styles.row}>
                        <Text style={styles.smallText}>{item.unit} Unit</Text>
                        <View style={styles.dot} />
                        <Text style={styles.smallText}>{item.duration}</Text>
                    </View>
                </View>
                {item.isPlaying ?
                    <AntDesign name={'playcircleo'} size={20} color={'green'} style={{ marginRight: 20, }} /> :
                    <Feather name={'lock'} size={20} color={'#cfcfcf'} style={{ marginRight: 20, }} />}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <WebView
                style={styles.container}
                javaScriptEnabled={true}
                source={{
                    uri: 'https://www.youtube.com/embed/q_AJK75oaqA?' +
                        'rel=0' +       // don't show related videos (deprecated)
                        '&autoplay=0' + // 0 => disable autoplay
                        '&showinfo=0' +
                        '&controls=0' + // hide default controls
                        '&color=' + Color.Accent +  // color of progressbar/seekbar
                        '&fs=0' +    // hide full-screen btn
                        '&modestbranding=1' // hide youtube logo  
                }}
                renderLoading={() => <ActivityIndicator color={Color.Accent} />}
            />

            <View style={[styles.sidebar, { transform: [{ translateX: hideSidebar ? 0 : SIDEBAR_WIDTH }] }]}>
                <Text style={styles.textLarge}>Course Content</Text>
                <SectionList
                    sections={CourseContent}
                    keyExtractor={(item) => 'video-' + item.id}
                    renderItem={({ item }) => <Item item={item} />}
                    renderSectionHeader={({ section }) => (
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>{section.title}</Text>
                            <View style={styles.row}>
                                <Text style={styles.smallText}>{section.unit} Unit</Text>
                                <View style={styles.dot} />
                                <Text style={styles.smallText}>{section.duration}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>

            <Feather
                name={'arrow-left'}
                size={20}
                color={'#cfcfcf'}
                onPress={navigation.goBack}
                style={styles.backBtn} />

            <Feather
                name={hideSidebar ? 'chevrons-right' : 'chevrons-left'}
                size={20}
                color={'#000'}
                onPress={toggleSidebar}
                style={[styles.backBtn, { right: 0, backgroundColor: '#fff' }]} />
        </View>
    );
};

export default Player;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sidebar: {
        width: SIDEBAR_WIDTH,
        height: '100%',
        zIndex: 50,
        right: 0,
        position: 'absolute',
        backgroundColor: '#FEFEFE',
    },
    item: {
        padding: 10,
        paddingVertical: 15,
        marginVertical: 4,
        flex: 1,
    },
    header: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        paddingVertical: 15
    },
    headerTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallText: {
        fontSize: 11,
        color: 'gray',
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 2,
        backgroundColor: 'gray',
        marginHorizontal: 10
    },
    textLarge: {
        fontSize: 18,
        fontWeight: '700',
        padding: 20,
        // flex: 1,
        textAlign: 'center'
    },
    backBtn: {
        padding: 15,
        backgroundColor: Color.Accent,
        position: 'absolute',
        margin: 6,
        borderRadius: 50,
        zIndex: 900,
    }
});


const CourseContent = [
    {
        title: 'Sec 1: Introduction to the web',
        unit: '1 / 2',
        duration: '20 min',
        data: [
            {
                id: '1',
                title: 'How the web works?',
                unit: '3 / 5',
                duration: '2 min',
                isPlaying: true,
            },
            {
                id: '2',
                title: 'Frontend vs Backend',
                unit: '3 / 5',
                duration: '8 min'
            },
            {
                id: '3',
                title: 'HTML & Styling',
                unit: '3 / 5',
                duration: '15 min'
            },
            {
                id: '4',
                title: 'Javascript',
                unit: '3 / 5',
                duration: '6 min'
            },
        ],
    },
    {
        title: 'Sec 2: Introduction to the web',
        unit: '2 / 2',
        duration: '10 min',
        data: [
            {
                id: '5',
                title: 'Lecture 1',
                unit: '3 / 5',
                duration: '2 min',
            },
            {
                id: '6',
                title: 'Lecture 2',
                unit: '3 / 5',
                duration: '8 min'
            },
            {
                id: '7',
                title: 'Lecture 3',
                unit: '3 / 5',
                duration: '15 min'
            },
            {
                id: '8',
                title: 'Lecture 4',
                unit: '3 / 5',
                duration: '6 min'
            },
        ],
    },

];