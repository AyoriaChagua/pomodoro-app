import React from "react";
import { StyleSheet, Text, View, StatusBar, Alert } from "react-native/types";

//import below
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "./actions";

//components
import Button from "../Button";

function mapStateToProps(state){

}

function mapDispatchToProps(dispatch){

}

function Timer() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.upper}>
                <Text style={styles.time}>25:00</Text>
            </View>
            <View style={styles.lower}>
                <Button
                    iconName="play-circle"
                    onPress={() => Alert.alert('Start Timer!')}
                />
                <Button
                    iconName="stop-circle"
                    onPress={() => Alert.alert('Stop Timer!')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    time: {
        color: '#fff',
        fontSize: 120,
        fontWeight: '100'
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default connect(
    mapDispatchToProps,
    mapStateToProps
)(Timer)