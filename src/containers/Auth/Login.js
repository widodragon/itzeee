import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import TextInputComp from '../../components/Auth/TextInputComp';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text, Spinner} from "native-base";
import {getLogin} from '../../redux/actions/login';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username   : '',
      password   : '',
      token      : '',
      isLoading  : false
    }
  }
  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", async ()=>{
      await AsyncStorage.getItem('token').then((value)=>{
        this.setState({token:value});
      });
      if(this.state.token===null || this.state.token === '' ){
        this.props.navigation.navigate('Login');
      }else{
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
        });
        this.props.navigation.dispatch(resetAction);
      }
    });
  }
  // componentWillUnmount(){
  //     if(this.state.token===null || this.state.token === '' ){
  //       this.props.navigation.navigate('Login');
  //     }else{
  //       const resetAction = StackActions.reset({
  //         index: 0,
  //         actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
  //       });
  //       this.props.navigation.dispatch(resetAction);
  //     }
  // }
  async onLogin(){
    this.setState({isLoading:true})
    try{
      const data={
        username:this.state.username,
        password:this.state.password,
      };
      await this.props.dispatch(getLogin(data));
      AsyncStorage.setItem('token', this.props.login.login.token);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
      });
      this.props.navigation.dispatch(resetAction);
      this.setState({isLoading:false})
    }catch(e){
      this.setState({isLoading:false})
      alert("Please check your data again!");
    }
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/auth_background.png')} style={styles.container}>
        <View style={{flex:0.3, justifyContent:"center", alignItems:"center", marginTop:hp(5)}}>
          <Image source={require('../../assets/point.png')} style={{width:"50%",height:hp(30), resizeMode:"contain"}}/>
        </View>
        <View style={{flex:0.7, marginTop:hp(-5)}}>
          <View style={{width:wp(90), alignSelf:"center"}}>
            <View style={{justifyContent:"center", alignItems:"center",marginTop:hp(2), marginBottom:hp(5)}}>
              <Text style={{color:"white",fontFamily:'sans-serif-thin', fontSize:hp(2.5)}}>Selamat datang kembali!</Text>
            </View>
            <TextInputComp 
              icon="envelope"
              placeholder="Email"
              style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="white"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}
            />
            <View style={{backgroundColor:"rgba(50, 52, 52, 0.2)", flexDirection:"row", borderRadius:10, marginBottom:hp(1)}}>
              <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                <Icon name="lock" size={hp(2.5)} color="white"/>
              </View>
              <View style={{flex:0.6, justifyContent:"center"}}>
                <TextInput 
                  placeholder="Password"
                  style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
                  keyboardType="default"
                  placeholderTextColor="white"
                  underlineColorAndroid='transparent'
                  onChangeText={(username) => this.setState({username})}
                />
              </View>
              <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity>
                  <Text style={{color:"white", fontSize:hp(2), fontWeight:"bold"}}>Lupa?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              {
                this.state.isLoading?<Spinner color="red" />
                :
                <TouchableOpacity style={{height:hp(8),backgroundColor:"rgba(50, 52, 52, 0.8)", borderRadius:10, justifyContent:"center", alignItems:"center"}} onPress={() => this.onLogin()}>
                  <Text style={{color:"white",fontFamily:'sans-serif-thin', fontSize:hp(2.5), fontWeight:"bold"}}>Masuk</Text>
                </TouchableOpacity>
              }
            </View>
          </View>
          <View style={{flexDirection:"column",marginBottom:hp(8), marginTop:hp(8), justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity style={{alignItems:"center"}}>
              <Text style={{color:"white",fontFamily:'sans-serif-thin', fontSize:hp(2.5)}}>Belum punya akun itzeee?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", marginTop:hp(1), marginBottom:hp(10)}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Registration")}>
                <Text style={{textDecorationLine:"underline", color:"white",fontFamily:'sans-serif-thin', fontWeight:"bold", fontSize:hp(2.5)}}>Daftar Sekarang</Text>
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
  }
})

export default connect(mapStateToProps)(Login)