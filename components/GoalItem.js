import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem (props) {
  return(
    <View style={styles.obsetionItem}>
      <Pressable 
        android_ripple={{color: '#210644'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.obsetionItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  obsetionItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  obsetionItemText: {
    padding: 8,
    color: 'white'
  },
  pressedItem: {
    opacity: 0.8
  }
});

