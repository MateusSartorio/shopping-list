import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { v4 } from 'uuid';
import Header from './components/Header/HeaderIndex';
import ListItem from './components/ListItem/ListItemIndex';
import AddItem from './components/AddItem/AddItemIndex';
import styles from './AppStyles';

const App = () => {

  const [items, setItems] = useState([
    {id: v4(), text: 'Milk'},
    {id: v4(), text: 'Meat'},
    {id: v4(), text: 'Cereals'},
    {id: v4(), text: 'Eggs'}
  ]);

  const deleteItem = (id) => {
    setItems( prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if(text) {
      setItems(prevItems => {
        return [{id: v4(), text: text}, ...prevItems]
      });
    }
    else {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    }
  };

  return (
    <View style={styles.container}>

      <Header title='Shopping List'/>

      <AddItem addItem={addItem}/>

      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} />

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
