/**
 * Author : Kusnadi
 * Description :
 * Component for creating simple header on React Native
 * props = {
 *  leftIconImage = (image resource)
 *  leftIconImagePress = (function callback)
 *  titleHeader = (string title)
 *  rightIconImage = (image resource)
 *  rightIconImagePress = (function callback)
 * }
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HeaderStyle } from './theme/Style';

const MyHeader = (props) => {
    return (
        <View style={HeaderStyle.container}>
            <View style={HeaderStyle.leftIcon}>
                <TouchableOpacity onPress={props.leftIconImagePress}>
                    <Image 
                        style={HeaderStyle.leftIconImage} 
                        source={props.leftIconImage} 
                    />
                </TouchableOpacity>
            </View>
            <View style={HeaderStyle.titleHeader}>
                <Text style={HeaderStyle.titleHeaderText}>
                    {props.textHeader}
                </Text>
            </View>
            <View style={HeaderStyle.rightIcon}>
                <TouchableOpacity onPress={props.rightIconImagePress}>
                    <Image 
                        style={HeaderStyle.rightIconImage} 
                        source={props.rightIconImage} 
                    />
                </TouchableOpacity>
            </View>            
        </View>
    );
};

export { MyHeader };
