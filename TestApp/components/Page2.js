import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
// Add icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
//import style
import styles from "./Styles1"


export default class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          page2: false,
        };
    }
    render() {
        if (this.state.page2) {
          return <App />;
        } else {
          return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    WebView - Page 2
                </Text>
                <Text style={styles.link}>
                    link: page1.html 
                </Text>
                <TouchableOpacity style={styles.btn} onPress = {() => {
                    this.props.navigation.navigate("Page3");}}>
                    <Text  style={styles.txt}>
                        Touch to go Page 3
                    </Text>
        </TouchableOpacity> 
            </View>
          );
        }
      }
}
