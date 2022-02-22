import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'



export default HomePage = ({ navigation }) => {
    return(
        <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#baffec'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 18, color: 'black'}}>
                Webview - Homepage
              </Text>
              <Text style={{fontSize: 16}}>
                Link: home-page.html
              </Text>
            </View>
            <View style={{height: '50%', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
              <TouchableOpacity onPress = {() => {
                navigation.navigate("Page1");
                }}>
                  <Text style={{fontSize: 20,color:'blue'}}>
                      Touch go to page 1
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
    )
}