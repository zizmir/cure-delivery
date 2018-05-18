import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';

export class SignIn extends React.Component {

    static navigationOptions = () => {

       return { headerStyle: { backgroundColor: "#3c81f6" }, headerLeft:
         <View>
            <TouchableOpacity>
              <Image source={require("../assets/logo.png")} style={{ marginLeft: 10 }} />
            </TouchableOpacity>, headerRight: <View style={{ flexDirection: "row", marginRight: 30 }}>
         </View>

       }

     }
    render(){

      return (
          <View>
            <Text>Login</Text>
          </View>

      )


}
