import React, {memo, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInputContainer value={text1} setValue={setText1} />
      <TextInputContainer value={text2} setValue={setText2} />
    </View>
  );
}

const TextInputContainer = memo(
  ({value, setValue}: {value: string; setValue: (a: string) => void}) => {
    return (
      <View style={{gap: 10, marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: '700'}}>
          {' '}
          Value: {value}
        </Text>
        <View style={{borderWidth: 1, borderRadius: 5}}>
          <TextInput value={value} onChangeText={setValue} />
        </View>
      </View>
    );
  },
);

export default App;
