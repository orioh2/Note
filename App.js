import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Translator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10, flex: 1, 
    justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{height: 40}}
        placeholder="Please Type Here !!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 24}}>
        {text.split(' ').map((word) => word && '#')
        .join(' ')}
      </Text>
    </View>
  );
}
export default Translator;
