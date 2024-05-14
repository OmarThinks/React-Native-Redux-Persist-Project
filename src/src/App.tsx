import {
  setTextInput1,
  setTextInput2,
  textInputSelector1,
  textInputSelector2,
} from '@redux';
import React, {memo, useCallback} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function App(): React.JSX.Element {
  const dispatch = useDispatch();

  const textInput1 = useSelector(textInputSelector1);
  const textInput2 = useSelector(textInputSelector2);

  const updateTextInput1 = useCallback(
    (text: string) => dispatch(setTextInput1(text)),
    [dispatch],
  );
  const updateTextInput2 = useCallback(
    (text: string) => dispatch(setTextInput2(text)),
    [dispatch],
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', margin: 16}}>
      <TextInputContainer
        header={'Persisted'}
        value={textInput1}
        setValue={updateTextInput1}
      />
      <TextInputContainer
        header={'Not Persisted'}
        value={textInput2}
        setValue={updateTextInput2}
      />
    </View>
  );
}

const TextInputContainer = memo(
  ({
    header,
    value,
    setValue,
  }: {
    header: string;
    value: string;
    setValue: (a: string) => void;
  }) => {
    return (
      <View style={{gap: 10, marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '700'}}>
          {header}: {value}
        </Text>
        <View style={{borderWidth: 1, borderRadius: 5}}>
          <TextInput value={value} onChangeText={setValue} />
        </View>
      </View>
    );
  },
);

export default App;
