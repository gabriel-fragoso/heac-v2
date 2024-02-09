import {
  Text,
  KeyboardAvoidingView,
  InputIcon,
  InputSlot,
  Button,
  View,
} from "@gluestack-ui/themed";
import { useState, useEffect } from "react";
import {
  Alert,
  Keyboard,
  Platform,
  StyleSheet,
  ToastAndroid,
  TouchableWithoutFeedback,
} from "react-native";
import { InputComponent } from "../components/Input";
import LongLogo from "../components/LongLogo";
import EyeOffIcon from "../components/EyeOffIcon";
import EyeIcon from "../components/EyeIcon";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("myProducts" as never);
        ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
      })
      .catch((error) => {
        ToastAndroid.show(
          "Opss, houve um erro! Teste novamente mais tarde",
          ToastAndroid.SHORT
        );

        if (error.code === "auth/invalid-credential") {
          Alert.alert("Opss...", "E-mail ou Senha inválidos!");
        }
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Stack.Screen
        options={{
          title: "Login",
          headerTitle: "",
          headerShown: true,
        }}
      />
      <LongLogo />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <InputComponent
            required={true}
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputComponent
            required={true}
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
          >
            <InputSlot width={20} height={20} pr="$3" onPress={handleState}>
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                color="#B1B0B8"
              />
            </InputSlot>
          </InputComponent>
          <Button w="$full" borderRadius="$full" mt={20} onPress={handleSignIn}>
            <Text color="#FFF" fontSize={16} fontWeight="bold">
              ENTRAR
            </Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginTop: 90,
    width: 305,
  },
});
