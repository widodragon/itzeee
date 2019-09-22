import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/login';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
class TextInputPassword extends Component {
  render() {
    let {style,icon,keyboardType,underlineColorAndroid,onChangeText}=this.props;
    return (
      <View style={{backgroundColor:"white", flexDirection:"row", borderRadius:hp(1), marginBottom:hp(1)}}>
        <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
          <Icon name={icon} size={hp(2.3)} color="black"/>
        </View>
        <View style={{flex:0.8, justifyContent:"center"}}>
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

export default connect(mapStateToProps)(TextInputPassword)