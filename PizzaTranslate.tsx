import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native';

const PizzaTranslate = () => {
    const [text, setText] = useState('');
  return (
    <View>
        <TextInput 
        defaultValue="" 
        placeholder = "Type something value"
        style={{borderWidth:1, borderColor:'black'}}
        onChangeText={(newText) => setText(newText)}
        />
        <Text>{text.split(" ").map((word) => (word && '🍕')).join(" ")}</Text>
    </View>
  )
}

export default PizzaTranslate;