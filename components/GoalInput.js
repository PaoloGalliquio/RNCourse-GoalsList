import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [goal, setGoal] = useState('');

  function inputHandler(text) {
    setGoal(text);
  }

  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal('')
  }

  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/Images/Goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Metas"
          onChangeText={inputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Agregar meta" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title='Cancelar' onPress={props.onCancel} color="#f32182"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    width: '100%',
    color: '#120438',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '40%',
    marginHorizontal: 8
  }
});
