import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import moment from 'moment'

export default props => (
    <View style={styles.row}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.textDesc}>{props.description}</Text>
        <Text style={styles.time}>{moment(props.date).format('LLL')}</Text>
    </View>
)