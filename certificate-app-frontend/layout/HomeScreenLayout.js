import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import {stylesCamera, stylesHistory, stylesSettings, stylesImageView} from '../styles/homeScreen.js'

export const CameraField = (props) => {
// export function CameraField() {
    return (
        <View style={stylesCamera.container}>
            <TouchableOpacity
                style={stylesCamera.button}
                onPress={() => {props.onPressFunc}}
            >
                <Text style={stylesCamera.text}>Add certificate</Text>
            </TouchableOpacity>
        </View>
    );
};

export const ImageView = (props) => {
    return (
        <View style={stylesImageView.container}>
            <Image source={{ uri:  ''}}>

            </Image>
        </View>
    );
}

export const HistoryField = (props) => {
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
