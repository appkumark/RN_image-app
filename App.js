import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageSlider from './components/ImageSlider';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 30
  },
});
