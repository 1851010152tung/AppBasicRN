import React from "react";
import{StyleSheet, view, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default class vnexpress2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vnexpress2: false
        }
    }

    render(){
        if(this.state.vnexpress2){
            return <App/>
        } else {
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>
                        WEB VIEW - VNExpress page...
                    </Text>
                    <Text style={styles.text}>
                        Link: vnexpress.next/page...
                    </Text>

                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    title:{
        fontSize: 30,
        textAlign:"center",
        color: "#000"

    },
    text:{
        fontSize:20,
        color:"#000",
        textAlign:"center"
    }

})