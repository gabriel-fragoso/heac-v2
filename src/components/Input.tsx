import { InputField, Input } from "@gluestack-ui/themed";
import { ReactNode } from "react";

type IInputProps = {
  placeholder: string;
  children?: ReactNode;
  type?: "text" | "password";
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: string;
  required: boolean;
};

export function InputComponent({
  placeholder,
  children,
  type,
  onChangeText,
  value,
  keyboardType,
  required,
}: IInputProps) {
  return (
    <Input
      width={305}
      paddingHorizontal={20}
      paddingVertical={12}
      borderColor="#B1B0B8"
      borderWidth={1}
      borderRadius={100}
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      isRequired={required}
    >
      <InputField
        value={value}
        type={type}
        width="90%"
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType === "numeric" ? "numeric" : "default"}
      />
      {children}
    </Input>
  );
}
