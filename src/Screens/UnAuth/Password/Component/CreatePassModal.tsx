import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { X, Copy, RefreshCw } from "lucide-react-native";
import { Colors } from "../../../../../utils/Colors";

const CreatePassModal = ({ isVisible, onClose }: any) => {
  const [password, setPassword] = useState("Click generate to create password");
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  const generatePassword = () => {
    const length = 16;
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let chars = lower;

    if (includeUppercase) chars += upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Password Generator</Text>
          <TouchableOpacity onPress={onClose}>
            <X size={22} color={Colors.black} />
          </TouchableOpacity>
        </View>

        {/* Password box */}
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.passwordText}
            value={password}
            editable={false}
            multiline
          />
          <TouchableOpacity>
            <Copy size={20} color={Colors.blue} />
          </TouchableOpacity>
        </View>

        {/* Options */}
        <Text style={styles.optionText}>Length: 16</Text>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Include Symbols</Text>
          <Switch
            value={includeSymbols}
            onValueChange={setIncludeSymbols}
            thumbColor={includeSymbols ? Colors.blue : "#ccc"}
          />
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Include Numbers</Text>
          <Switch
            value={includeNumbers}
            onValueChange={setIncludeNumbers}
            thumbColor={includeNumbers ? Colors.blue : "#ccc"}
          />
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Include Uppercase</Text>
          <Switch
            value={includeUppercase}
            onValueChange={setIncludeUppercase}
            thumbColor={includeUppercase ? Colors.blue : "#ccc"}
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.btn} onPress={generatePassword}>
          <RefreshCw size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.btnText}>Generate Password</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CreatePassModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  passwordBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  passwordText: {
    flex: 1,
    fontSize: 14,
    marginRight: 10,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  optionText: {
    fontSize: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue,
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
