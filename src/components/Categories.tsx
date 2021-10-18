import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Color } from '../common/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers';

interface CategoriesProps { 
    navigation: NativeStackNavigationProp<ParamListBase, 'Home'>
}

const ListData = [
    { id: 1, title: 'Web Development', icon: 'flag', color: Color.Yellow },
    { id: 2, title: 'Data Science', icon: 'pie-chart', color: Color.Blue },
    { id: 3, title: 'Marketing', icon: 'book', color: Color.Red },
    { id: 4, title: 'Accounting', icon: 'flag', color: Color.Yellow },
]

// Display horizontal list of categories (Web Development, Data Science, Makerting etc)
const Categories = ({navigation}: CategoriesProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Learning Path</Text>

            <FlatList
                data={ListData}
                horizontal
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `category-${item.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={[styles.box, { backgroundColor: item.color, }]}>
                            <View style={{ flex: 1, opacity: 0.8, }}>
                                <Entypo name={item.icon} size={30} />
                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>Start Learning &gt;</Text>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    heading: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 20
    },
    list: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    box: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginRight: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
    title: {
        fontWeight: '700',
        fontSize: 12
    },
    description: {
        fontWeight: '700',
        fontSize: 10,
        color: Color.Accent,
        marginTop: 15,
    }
});
