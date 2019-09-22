import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/login';
class TextInputComp extends Component {
  render() {
    let {title,style,keyboardType,underlineColorAndroid,onChangeText}=this.props;
    return (
      <View>
        <View style={{flexDirection:"column",marginTop:hp('1%'), marginBottom:hp("1%")}}>
          <Text style={{fontWeight:"bold"}}>{this.props.title}</Text>
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

export default connect(mapStateToProps)(TextInputComp)