import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Explora</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/logo_nasa.png')} style={styles.logo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    textContainer: {
        marginBottom: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: 200,
        height: 200,
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default Header;