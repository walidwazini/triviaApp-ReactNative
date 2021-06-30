import React from 'react';
import {
  StyleSheet, Text, View, FlatList, TouchableOpacity,
  ScrollView, Button, SafeAreaView, TextInput, ImageBackground
} from 'react-native';

export default  function Question({navigation}) {
    return (
        <View style={styles.container} >
          <Text>Score</Text>
          <Text>{navigation.getParam('score')}</Text>
          <Text>Highcore</Text>
          <Text>{navigation.getParam('highscore')}</Text>
          <Text>{navigation.getParam('duration')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  