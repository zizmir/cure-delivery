import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';

export  class Home extends React.Component {

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
            <Text>Homepage</Text>

          </View>

      )
    }

}
