import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './logo'


export default class IntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1, alignItems:'center', backgroundColor: '#fffacd'}}>
        <View style={{height: '50%', width: '100%', justifyContent:'center', alignItems:'center'}}>
            <View  style={styles.circle}>
                <Text style={styles.textin}>{item.textin}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={{height: '20%', width: '100%'}}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
          <Text style={{fontSize: 28, color: 'black'}}>Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
        <TouchableOpacity style={styles.buttonCircle} onPress = {() => {
            this.props.navigation.navigate("Screen1");
            this.setState({isBottomShert: true});
            }}>
            <Text  style={{fontSize: 18, color: 'black'}}>Start</Text>
        </TouchableOpacity> 
    );
  };

  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          activeDotStyle = {{width: 30, borderRadius: 20, backgroundColor: 'black' }}
          dotStyle = {{width:20, backgroundColor:'green'}}
          renderItem={this._renderItem}
          bottomButton
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          data={slides}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
    title: {fontSize: 20, marginTop: 20, textAlign: 'center'},
    text: {fontSize: 18, marginTop: 30, textAlign: 'center'},
    textin:{fontSize: 20, textAlign: 'center'},
    circle: {
      height: 200,
      width: 200,
      borderRadius: 200,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    buttonCircle: {
      height: 50,
      borderRadius: 8,
      borderColor: 'black',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#90ee90',
      flex: 1
    }
  });
  const slides = [
    {
      key: 'one',
      title: 'EXCLUSIVELY\nON xxxx',
      text: 'Onboarding 1',
      textin: 'H',
    },
    {
      key: 'two',
      title: 'ALLOW PUSH\nNOTIFICATION?',
      text: 'Onboarding 2',
      textin: 'Onboarding 2',
    },
    {
      key: 'three',
      title: 'ALLOW PUSH\nNOTIFICATION?',
      text: 'Onboarding 2',
      textin: 'Location',
    },
    {
      key: 'four',
      title: 'READY TO\n START?',
      text: 'Onboarding 2',
      textin: 'Ready',
    },
  ];