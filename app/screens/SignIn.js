import React from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default ({ navigation }) => (
  <KeyboardAvoidingView
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        behavior="padding"
      >
  <View style={{ paddingVertical: 20 }}>
      <View
          style={{
            // backgroundColor: "#bcbec1",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 40,
            alignSelf: "center",
            marginTop: 15
          }}
        >
      <Image
          source={require('../images/murmur_logo.png')}
          style={{width: 50, height: 50}}
        />
      </View>
      <FormLabel
        labelStyle={styles.FormLabel}
      >USER NAME</FormLabel>
      <FormInput placeholder="User Name..." />
      <FormLabel
        labelStyle={styles.FormLabel}
      >PASSWORD</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#7C2289"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
  </View>
  </KeyboardAvoidingView>
);

var styles = StyleSheet.create({

Text1: {
      marginTop : 10,
      color: '#800080',
      alignSelf: 'center'
    },
    Text2: {
      color: '#800080',
      alignSelf: 'center'
    },
    FormLabel : {
      color : '#000000',
      fontWeight: '300'
    }

});