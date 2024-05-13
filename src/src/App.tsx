import {setTextInput1, textInputSelector1} from '@redux';
import React, {memo, useCallback, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function App(): React.JSX.Element {
  //const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const dispatch = useDispatch();

  const textInput1 = useSelector(textInputSelector1);

  const updateTextInput1 = useCallback(
    (text: string) => dispatch(setTextInput1(text)),
    [dispatch],
  );

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInputContainer value={textInput1} setValue={updateTextInput1} />
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
