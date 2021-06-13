import React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import {stylesCamera, stylesHistory, stylesSettings} from '../styles/homeTest.js'

// export const CameraField = (props) => {
export function CameraField() {
    return (
        <View style={stylesCamera.container}>
            <TouchableOpacity
                style={stylesCamera.button}
                onPress={() => {}}
            >
                <Text style={stylesCamera.text}>Add Certificate</Text>
            </TouchableOpacity>
        </View>
    );
};

export function HistoryField() {
    return (
        <View style={stylesHistory.container}>
            <TouchableOpacity
                style={stylesHistory.button}
                onPress={() => {}}
            >
                <Text style={stylesHistory.text}>History</Text>
            </TouchableOpacity>
        </View>
    );
}

export function SettingsField() {
    return (
        <View style={stylesSettings.container}>
            <TouchableOpacity
                style={stylesSettings.button}
                onPress={() => {}}
            >
                <Text style={stylesSettings.text}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}
