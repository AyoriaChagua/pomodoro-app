import React from "react";
import { TouchableOpacity } from "react-native/types";
import PropTypes from 'prop-types'
import { FontAwesome } from "@expo/vector-icons";

export default function Button ({iconName, onPress}) {
    <TouchableOpacity onPress={onPress}>
        <FontAwesome name={iconName} size={80} color="#fff"/>
    </TouchableOpacity>
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}