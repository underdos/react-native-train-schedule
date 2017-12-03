/**
 * Author : Kusnadi
 * Description :
 * Component for creating Spinner/Loading circle on React Native
 * props = {
 *  size = (enum {small, large})
 * }
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SpinnerStyle } from './theme/Style';

const MySpinner = ({ size }) => {
    return (
        <View style={SpinnerStyle.container}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
}

export { MySpinner };
