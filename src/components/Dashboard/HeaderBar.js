import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import {hp,wp} from '../../helpers/Responsive';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, CardItem, View, Thumbnail, Text, Button, Left, Body } from 'native-base';
export default class HeaderBar extends Component {
  onRedeem=()=>{
    this.props.navigation.navigate('Reward');
  }
  onScan=()=>{
    
  }
  render() {
    return (
     <View style={{
          backgroundColor:'white', 
          height: hp(18),
          flex:1, 
          width:wp("80%"),
          shadowColor: 'grey',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 1,
          position:"absolute",
          alignSelf:"center",
          marginTop:hp(15),
          flexDirection:"column"
        }}>
          <View style={{flex:0.5, flexDirection:"column"}}>
            <View style={{flexDirection:"row"}}>
              <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                <Image source={require('../../assets/point.png')} style={{marginLeft:wp(5),height: hp(12), width: wp(20)}}/>
              </View>
              <View style={{flex:0.8, flexDirection:"column", justifyContent:"center"}}>
                <View style={{marginLeft:wp(5)}}>
                  <Text style={{
                        textAlign:"left",
                        color:"black",
                        fontSize:18}}>
                        Fikri Akhdi Saputra
                  </Text>
                  <Text style={{
                    textAlign:"left",
                    color:"#b89127",
                    fontSize:16}}>{this.props.points}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginRight:wp(4),
              marginLeft:wp(4),
              borderBottomColor: 'black',
              borderBottomWidth: 1
            }}
          />
          <View style={{flex:0.5, flexDirection:"row", paddingLeft:wp(3),paddingRight:wp(3), marginBottom:hp(-2),marginTop:hp(-1)}}>
            <Button style={{
              backgroundColor:"black",
              alignSelf:"center",
              flex:0.5,
              width:wp("100%"),
              height:hp(6),
              marginRight:wp(1),
              marginLeft:wp(1),
              marginBottom:hp(1),
              paddingLeft:wp(2),
              paddingRight:wp(1),
              justifyContent:"center"
            }} 
              onPress={this.onScan}
            >
              <Icon name="qrcode" size={20} color="white" light />
              <Text>SCAN QR</Text>
            </Button>
            <Button style={{
              backgroundColor:"black",
              alignSelf:"center",
              flex:0.5,
              width:wp("100%"),
              height:hp(6),
              marginRight:wp(1),
              marginLeft:wp(1),
              marginBottom:hp(1),
              paddingLeft:wp(2),
              paddingRight:wp(1),
              justifyContent:"center"
            }} 
              onPress={this.onRedeem}
            >
              <Icon name="gift" size={20} color="white" light />
              <Text>REWARD</Text>
            </Button>
          </View>
        </View> 
    );
  }
}

const styles = StyleSheet.create({
  cardHeader:{
    height:80,
    borderRadius:25,
    marginTop:90,
    borderColor:"green",
    borderWidth:5,
    marginRight:30,
    marginLeft:30
  }
});