import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ListItemStyles';

const ListItem = (props) => {
    
    return(
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.text}>{props.item.text}</Text>
                <Icon name='remove' size={20} color='firebrick' onPress={() => props.deleteItem(props.item.id)}/>                
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;