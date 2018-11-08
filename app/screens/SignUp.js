import React from "react";
import { View,Text,Image,StyleSheet,Keyboard, KeyboardAvoidingView,ScrollView, Platform } from "react-native";
import { Card, Button, FormLabel, FormInput,FormValidationMessage, Input } from "react-native-elements";
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
  <View style={{ paddingVertical: 0 }}>
      <View
          style={{
            // backgroundColor: "#bcbec1",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 40,
            alignSelf: "center",
            marginTop: 10
          }}
        >
      <Image
          source={require('../images/murmur_logo.png')}
          style={{width: 40, height: 40}}
        />
      </View>
      <FormLabel
        labelStyle={styles.FormLabel}
      >NAME</FormLabel>
      <FormInput placeholder="Name..." />
      <FormLabel
        labelStyle={styles.FormLabel}
      >USER NAME</FormLabel>
      <FormInput placeholder="User Name..." />
      <FormLabel
      labelStyle={styles.FormLabel}
      >PASSWORD</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel
      labelStyle={styles.FormLabel}
      >CONFIRM PASSWORD</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{ marginTop: 10 }}
        backgroundColor="#7C2289"
        title="NEXT"
        onPress={() => {
          navigation.navigate("KeyPair");
        }}
      />

      <View>
        <Text
         style={styles.Text1}
         onPress={() => navigation.navigate("SignIn")}
        >Already have an Account</Text>
        <Text style={styles.Text2}>Forgot Password ?</Text>
      </View>
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