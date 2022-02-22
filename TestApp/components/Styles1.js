import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0dfdb',
    },
    title: {
        fontSize: 30, 
        fontWeight: "bold",
        textAlign: 'center'
    },
    link: {
        fontSize: 18, 
        marginTop: 10, 
        textAlign: 'center'
    },
    btn:{
        marginTop: 40,
        //backgroundColor: '#22aed1',
        height: 40,
        width: 200,
    },
    txt:{
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        fontSize: 18, 
        color: '#3bacce', 
        textAlign: 'center'
    },
    tab_menu:{
        height: 40,
        width: '100%',
        backgroundColor: 'yellow',
    },
});
export default styles;