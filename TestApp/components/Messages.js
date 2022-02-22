import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';

import styles from "./Styles1"

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: false,
        };
    }
    render() {
        if (this.state.messages) {
          return <App />;
        } else {
          return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    WebView - Messages
                </Text>
                <Text style={styles.link}>
                    link: Messages.html 
                </Text>
                <TouchableOpacity style={styles.btn} onPress = {() => {
                    this.props.navigation.navigate("vnexpress1");}}>
                    <Text  style={styles.txt} >
                        go vnexpress.net
                    </Text>
                </TouchableOpacity> 
            </View>
          );
        }
      }
}
