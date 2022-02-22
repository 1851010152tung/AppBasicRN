import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./Styles1"


export default class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          page3: false,
        };
    }
    render() {
        if (this.state.page3) {
          return <App />;
        } else {
          return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    WebView - Page 3
                </Text>
                <Text style={styles.link}>
                    link: page1.html 
                </Text>
                <TouchableOpacity style={styles.btn} onPress = {() => {
                    this.props.navigation.navigate("HomePage");}}>
                    <Text  style={styles.txt}>
                        Touch to go HomePage
                    </Text>
        </TouchableOpacity> 
            </View>
          );
        }
      }
}