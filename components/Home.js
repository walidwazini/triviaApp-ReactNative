import React from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity, Image,
    ScrollView, SafeAreaView, TextInput, ImageBackground, ActivityIndicator
} from 'react-native';
import { Button, Card } from 'react-native-elements';
import { LinearGradient } from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient'


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['red','yellow']} >
                <Text>Hello</Text>
            </LinearGradient>
            <View style={styles.cardHome}>
                <Image
                    style={{ width: 300, height: 300, top: -10, }}
                    source={require('../assets/logo-1-removebg-preview.png')} />
                <TouchableOpacity
                    onPress={() => navigation.push('Question')}
                    style={styles.startBtn} >
                    <Text>
                        Start Game
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hiScoretBtn} >
                    <Text>
                        High Score
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.aboutBtn} >
                    <Text>
                        About Us
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundGradient: "vertical",
        backgroundGradientTop: "#333333",
        backgroundGradientBottom: "#666666"
    },
    cardHome: {
        width: '70%',
        height: '70%',
        backgroundColor: 'yellow',
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', // same as default

    },
    // ----------      BUTTONS     ------------
    startBtn: {
        marginTop: -20,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
    },
    hiScoretBtn: {
        marginTop: 20,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
    },
    aboutBtn: {
        marginTop: 20,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    }
});
