import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../AddItem/AddItemStyles';

const AddItem = (props) => {

    let [text, setText] = useState('');

    let onChange = (textValue) => {
        setText(textValue);
    };
    
    return(
        <View>
            <TextInput placeholder='Add item...' style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.button} onPress={() => {props.addItem(text); }}>
                    <Icon name='plus' size = {20} style={styles.buttonText}/>
            </TouchableOpacity>
        </View>
    );
};

export default AddItem;