import "./global.css";  
import { COLORS } from "@drivn/ui";
import { Text, View, StyleSheet } from "react-native";
export default function App() {
  return (
    <View>
      <Text style={{ color: COLORS.primary }}>{COLORS.primary}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
