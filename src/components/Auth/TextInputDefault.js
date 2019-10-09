import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
class TextInputDefault extends Component {
  render() {
    let {style,icon,keyboardType,underlineColorAndroid,onChangeText}=this.props;
    return (
      <View style={{backgroundColor:"white", flexDirection:"row", borderRadius:hp(1), marginBottom:hp(2)}}>
        <View style={{flex:0.02, justifyContent:"center", alignItems:"center"}}>
        </View>
        <View style={{flex:0.98, justifyContent:"center"}}>
          <TextInput
            {...this.props} 
            style={style}
            keyboardType={keyboardType}
            underlineColorAndroid={underlineColorAndroid}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"#f2f3f5"
  }
})

export default connect(mapStateToProps)(TextInputDefault)