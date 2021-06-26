import React from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,Image,
    ScrollView, Button, SafeAreaView, TextInput, ImageBackground
} from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image 
            style={{width:300, height:300}}
            source={require('../assets/logo-1.jpg')}/>
            <TouchableOpacity 
            onPress={() => navigation.push('Question')}
            style={styles.startBtn} >
                <Text>
                    Start Game
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hiScoretBtn} >
                <Text>
                    HighScore
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutBtn} >
                <Text>
                    About Us
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtn: {
        marginTop: 20,   
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
