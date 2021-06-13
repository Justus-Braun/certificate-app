import React from 'react';
import { View, Text, Button } from 'react-native';
import {stylesCamera, stylesHistory, stylesSettings} from '../styles/homeTest.js'

// export const CameraField = (props) => {
export function CameraField() {
    return (
        <View style={stylesCamera.container}>
            <Button styles={stylesCamera.button} title="Add Certificate"/>
        </View>
        /*
        <div className="Camera">
           <!--<button onClick={props.OpenCamera}>Add Certificate</button>-->
            <button>Add Certificate</button>
        </div>

         */
    );
};

export function HistoryField() {
    return (
        <View style={stylesHistory.container}>
            <Button styles={stylesHistory.button} title="History"/>
        </View>
        /*
        <div className="History">
            <button>History</button>
        </div>

         */
    );
}

export function SettingsField() {
    return (
        <View style={stylesSettings.container}>
            <Button styles={stylesSettings.button}title="Settings"/>
        </View>
        /*
        <div className="Settings">
            <button>Settings</button>
        </div>

         */
    );
}
