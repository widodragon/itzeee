import React, { Component } from 'react';
import {connect} from "react-redux";
import { StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import TextInputComp from '../../components/Auth/TextInputComp';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text, Spinner} from "native-base";
import {hp,wp} from '../../helpers/Responsive';
class IntroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username   : '',
      password   : '',
      token      : '',
      isLoading  : false
    }
  }
  render() {
    return (
      <ImageBackground source={require('../../assets/auth_background.png')} style={styles.container}>
        <View style={{flex:0.1}} />
        <View style={styles.bannerWrapper}>
          <Image source={require('../../assets/point.png')} style={{width:"30%",height:hp(20), resizeMode:"contain"}}/>
          <View style={{justifyContent:"center", alignItems:"center", marginBottom:hp(5)}}>
            <Text style={{fontWeight:"bold", fontFamily: 'sans-serif-thin', color:"white", fontSize:hp(4)}}>Itzeee</Text>
            <Text style={{color:"white",fontFamily:'sans-serif-thin', fontSize:hp(2.5)}}>We make it easy</Text>
          </View>
        </View>
        <View style={{flex:0.35, marginTop:hp(-2)}}>
          <View style={{width:"85%", alignSelf:"center"}}>
            <View>
              {
                this.state.isLoading?<Spinner color="red" />
                :
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Registration")}>
                  <Text style={{fontSize:hp(2.5),fontWeight:"bold", fontFamily:'sans-serif-thin', color:"white"}}>Mulai Sekarang</Text>
                </TouchableOpacity>
              }
            </View>
          </View>
          <View style={{flexDirection:"column", marginTop:hp(8), marginBottom:hp(8), justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity style={{alignItems:"center"}}>
              <Text style={{fontSize:hp(2.5), color:"white", fontFamily:'sans-serif-thin'}}>Sudah punya akun itzeee?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", marginTop:hp(1), marginBottom:hp(10)}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
                <Text style={{textDecorationLine:"underline", fontSize:hp(2.5), color:"white", fontWeight:"bold", fontFamily:'sans-serif-thin'}}>Masuk Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
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
    resizeMode:"cover",
    width:"100%",
    height:"100%"
  },
  button:{
    backgroundColor: "#069ac7", 
    paddingTop:hp(2.5), 
    paddingBottom:hp(2.5), 
    borderRadius:hp(1),
    justifyContent:"center", 
    alignItems:"center", 
    marginTop:hp(1)
  },
  bannerWrapper:{
    flex:0.55, 
    paddingTop:hp(5), 
    justifyContent:"center", 
    alignItems:"center"
  }
})

export default connect(mapStateToProps)(IntroApp)