import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

export default Page1 = ({ navigation }) => {
    return(
        <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#fca788'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: 'red'}}>
                Webview - Page1
              </Text>
              <Text style={{fontSize: 18}}>
                Link: page1.html
              </Text>
            </View>
            <View style={{height: '50%', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
              <TouchableOpacity onPress = {() => {
                navigation.navigate("Page2");
                }}>
                  <Text style={{fontSize: 16}}>
                      Touch go to page 2
                  </Text>
              </TouchableOpacity>
            </View>
          </View>   
        </SafeAreaView>
    )
}