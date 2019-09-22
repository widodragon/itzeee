import React, { Component } from 'react';
import {Alert, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HeaderIcon extends Component {
  render() {
    return (
        <View style={{flex:0.15, flexDirection:"row", width:"100%", backgroundColor:"black", justifyContent:"center",alignItems:"center"}}>
          <View style={{flex:0.2}}></View>
          <View style={{flex:0.55, justifyContent:"center", alignItems:"center"}}>
            <Image source={require('../../assets/subtitle.png')} style={{width:160, height:50, resizeMode:"cover"}} />
          </View>
          <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
            <TouchableNativeFeedback onPress={()=>{this.onExit()}}>
              <Icon name="bell" size={30} color="white" light />
            </TouchableNativeFeedback>
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    promotion: state.promotion
  }
}


export default HeaderIcon