import { Button, Image, Text, View } from "@gluestack-ui/themed";
import ShortLogo from "../components/ShortLogo";
import React from "react";
import User from "../components/User";
import { Link, Stack } from "expo-router";
import QRCodeIcon from "../components/QRCodeIcon";

export default function Home() {
  return (
    <View display="flex" alignItems="center" bg="white" h="$full" top="$0">
      <Image
        position="absolute"
        top="$0"
        left="$0"
        w="$full"
        h={316}
        alt="Background"
        source={require("../../assets/bg.png")}
      />
      <Image
        w={192}
        h={352.24}
        marginTop={40}
        alt="Hero"
        source={require("../../assets/hero.png")}
      />
      <ShortLogo w="60" h="94" />
      <Text
        mt="$4"
        fontWeight="$bold"
        fontSize="$2xl"
        lineHeight="$2xl"
        textAlign="center"
        color="#585666"
        mx="$3"
      >
        Preserve sua empresa
      </Text>
      <View mt="$4" display="flex" gap="$4">
        <Link href="/login" asChild>
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={295}
            h={56}
            borderWidth="$1"
            borderColor="#E3E3E6"
            borderRadius="$sm"
            bg="#FAFAFC"
          >
            <Text mr="auto">
              <User />
            </Text>
            <Text mr="auto" fontSize={15}>
              Entrar
            </Text>
          </Button>
        </Link>
        <Button
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={295}
          h={56}
          borderWidth="$1"
          borderColor="#E3E3E6"
          borderRadius="$sm"
          bg="#FAFAFC"
        >
          <Text mr="auto">
            <QRCodeIcon h="16" w="16" fill="#666666" />
          </Text>
          <Text mr="auto" fontSize={15}>
            Acesso Público
          </Text>
        </Button>
      </View>
    </View>
  );
}
