import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    ScrollView, Button, SafeAreaView, TextInput, ImageBackground
} from 'react-native';

export default function Question({ navigation }) {
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    // currentQ = Current Question
    const [currentQ, setCurrentQ] = useState(0)
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
                setOptions(tempOptions);
            })
    }, []);

    return (
        <View style={styles.container} >
            <ImageBackground style={styles.bgStyle}
                source={require('../assets/bg-1.png')} >
                {/* // If question is presence */}
                {(questions.length > 0) ?
                    <View>
                        <Text style={{ color: 'white', marginVertical: 12, }} >
                            {questions[0]['question']}
                        </Text>
                        {options.map(val => {
                            return (
                                <TouchableOpacity
                                key={val}
                                    onPress={() => {
                                        console.log('test')
                                        if (val === questions[currentQ]['correct_answer']) {
                                            alert('Correct!')
                                            setScore(score + 1)
                                            let tempOptions = [...questions[currentQ]['incorrect_answers'], questions[currentQ]['correct_answer']]
                                            console.log(tempOptions);
                                            setOptions(tempOptions);
                                        }
                                        else {
                                            alert('Wrong Answer!')
                                        }
                                    }}
                                    style={styles.option1} >
                                    <Text>{val}</Text>
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
