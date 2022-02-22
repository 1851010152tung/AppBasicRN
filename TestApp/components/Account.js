import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

export default Account = () => {
    return(
        <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#fafad2'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: 'red'}}>
                Page Account
              </Text>
              <Text style={{fontSize: 16}}>
                Link: Account.html
              </Text>
            </View>
          </View>   
        </SafeAreaView>
    )
}