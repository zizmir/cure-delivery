import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';

export  class SignUp extends React.Component {

    static navigationOptions = () => {

       return { headerStyle: { backgroundColor: "#3c81f6" }, headerLeft:
         <View>
            <TouchableOpacity>
            </TouchableOpacity>
         </View>

       }

     }
    render(){

      return (
          <View>
            <Text>Register</Text>

          </View>

      )
    }



}
