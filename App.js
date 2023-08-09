import { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList} from 'react-native';

export default function App (){
  console.log('Everything is fine...');

  const [value, setValue] = useState('');
  const [listOfNotes, setListOfNotes] = useState([]);

  const handleChangeText = (e)=>{
    setValue(e);
  }

  const handleOnPressButton = ()=>{
    setListOfNotes((currentNotes)=>[...currentNotes, value]);
  }

  // console.log(listOfNotes);

  return (
    <View style={{padding: 60, paddingHorizontal: 15, flex: 1}}>

      {/* to render input along with button */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleChangeText} style={styles.input} placeholder='Add your note here...'></TextInput>
        <Button onPress={handleOnPressButton} color={'black'} title='Add Note'/>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={listOfNotes}
          renderItem={(itemData)=>{
            // console.log(itemData.item, itemData.index);
            return <Text style={styles.listItem} keyExtractor={(itemData)=>itemData.index} >{itemData.item}</Text>;
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center'
  },

  input:{
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1
  },

  listContainer: {
    paddingTop: 10,
    flex: 3
  }, 

  listItem: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: 'green',
    backgroundColor: 'orange',
    padding:20,
  }
})