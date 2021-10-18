import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '../common/Theme';

interface HeaderProps { }

const Header = (props: HeaderProps) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Color.Background} barStyle={'dark-content'} />

            {/* Menu Icon */}
            <Ionicons name="md-menu-outline" size={30} />

            {/* Search Icon */}
            <Ionicons name="md-search-outline" size={30} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
    }
});
