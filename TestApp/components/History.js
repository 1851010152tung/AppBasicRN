import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import styles from "./Styles1"

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          history: false,
        };
    }
    render() {
        if (this.state.history) {
          return <App />;
        } else {
          return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    WebView - History
                </Text>
                <Text style={styles.link}>
                    link: History.html 
                </Text>
                <TouchableOpacity style={styles.btn} onPress = {() => {
                    this.props.navigation.navigate("Page2");}}>
                    <Text  style={styles.txt}>
                        Touch to go Page 2
                    </Text>
                </TouchableOpacity> 
            </View>
          );
        }
      }
}
