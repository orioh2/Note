import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>React Native Mobile Application</Text>
      <View>
        <Text>Core Component</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
        defaultValue="This is TextInput Component."
      />
    </ScrollView>
  );
}
export default App;