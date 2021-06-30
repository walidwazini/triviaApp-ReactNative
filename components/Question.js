import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    ScrollView, Button, SafeAreaView, TextInput, ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Question({ navigation }) {
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    // currentQ = Current Question
    const [currentQ, setCurrentQ] = useState(0)
    const [startTime,setStartTime] = useState(0)
    const shuffleArray = (array) => {
        var currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const transformChar = (mystring) => {
        return mystring.replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&quot;/g, '"');
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
            .then(response => response.json())
            // Data from the 'results' in the object (API)
            .then(data => {
                console.log(data)
                setQuestions(data['results'])
                // let tempOptions = data['results'][0]['incorrect_answers']
                // console.log(tempOptions)
                // tempOptions.push(data['results'][0]['correct_answer'])
                let tempOptions = [...data['results'][currentQ]['incorrect_answers'], data['results'][currentQ]['correct_answer']]
                console.log(tempOptions);
                tempOptions = shuffleArray(tempOptions)
                setOptions(tempOptions);
                setStartTime( new Date().getTime() );
            })
    }, []);

    return (
        <View style={styles.container} >
            <ImageBackground style={styles.bgStyle}
                source={require('../assets/bg-1.png')} >
                {/* // If question is presence */}
                {(questions.length > 0) ?
                    <View>
                        <Text style={{ margin: 10 }}>Question {currentQ + 1} out of {questions.length} </Text>
                        <Text style={{ margin: 10 }}>{transformChar(questions[currentQ]['question'])}</Text>

                        {options.map(val => {
                            return (
                                <TouchableOpacity style={styles.option1}
                                    key={val}
                                    onPress={async () => {
                                        if (val === questions[currentQ]['correct_answer']) {
                                            setScore(score + 1)
                                        }
                                        if (currentQ == questions.length - 1) {
                                            try {
                                                let highscore = 0
                                                let endTime = new Date().getTime()
                                                let duration = endTime - startTime ;
                                                // TODO save and retrieve time for high score..

                                                const jsonValue = await AsyncStorage.getItem('@highscore')
                                                if (jsonValue != null) {
                                                    highscore = JSON.parse(jsonValue)
                                                }
                                                if (score > highscore) {
                                                    const jsonValue = JSON.stringify(score)
                                                    await AsyncStorage.setItem('@highscore', jsonValue)
                                                }
                                                navigation.push('Score', { 'score': score, 'highscore': highscore, 'duration': duration })
                                            } catch (e) {
                                                // error reading value
                                            }

                                        }
                                        else {
                                            let tempOptions = [...questions[currentQ + 1]['incorrect_answers'],
                                            questions[currentQ + 1]['correct_answer']];
                                            console.log(questions[currentQ]['correct_answer'])
                                            tempOptions = shuffleArray(tempOptions)
                                            setOptions(tempOptions);
                                            setCurrentQ(currentQ + 1);
                                        }
                                    }}
                                >
                                    <Text>{transformChar(val)}</Text>
                                </TouchableOpacity>
                            )
                        })
                        }
                    </View> :
                    <Text>Loading...</Text>
                }
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    bgStyle: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    option1: {
        textAlign: 'center',
        width: '300',
        backgroundColor: 'red',
        padding: 8,
        margin: 8,
    },
    option2: {
        textAlign: 'center',
        width: '300',
        backgroundColor: 'yellow',
        padding: 8,
        margin: 8,
    },
    option3: {
        textAlign: 'center',
        width: '300',
        backgroundColor: 'blue',
        padding: 8,
        margin: 8,
    },
    option4: {
        textAlign: 'center',
        width: '300',
        backgroundColor: 'green',
        padding: 8,
        margin: 8,
    },
});
