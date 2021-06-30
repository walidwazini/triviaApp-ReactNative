import React from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity, Image,
    ScrollView, SafeAreaView, TextInput, ImageBackground, ActivityIndicator
} from 'react-native';
import { Button, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {
    return (
        <LinearGradient  colors={['#12c2e9','#c471ed','#f64f59']} 
        start={ {x: 0.9, y: 0.5} }
        style={styles.container}>
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
                <TouchableOpacity  
                onPress={() => navigation.push('About')}
                style={styles.aboutBtn} >
                    <Text>
                        About Us
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
