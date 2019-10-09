import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, ScrollView,StyleSheet, Image, TouchableOpacity, Picker, ImageBackground} from 'react-native';
import TextInputComp from '../../components/Auth/TextInputComp';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
import RNPickerSelect from 'react-native-picker-select';
import ModalDropdown from 'react-native-modal-dropdown';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : '',
      religious  : ''
    }
  }
  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", async ()=>{
      await AsyncStorage.getItem('token').then((value)=>{
        this.setState({token:value});
      });
      if(this.state.token===null || this.state.token === '' ){
        this.props.navigation.navigate('Registration');
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
    }catch(e){
      alert("Please check your data again!");
    }
  }
  render() {
    let index = 0;
    const data = [{
  key: 5,
  label: 'Red Apples',
  component: <View style={{backgroundColor: 'red'}}><Text style={{color: 'white'}}>Red Apples custom component ☺</Text></View>
}]
    return (
      <ImageBackground source={require('../../assets/auth_background.png')} style={styles.container}>
        <ScrollView>
          <View style={{flex:0.3, justifyContent:"center", alignItems:"center", marginTop:hp(2)}}>
            <Image source={require('../../assets/point.png')} style={{width:"20%",height:hp(10), resizeMode:"contain", marginTop:hp(5)}}/>
            <View style={{marginTop:hp(2), alignItems:"center", marginBottom:hp(5)}}>
              <Text style={{color:"white",fontFamily:'sans-serif-thin', fontSize:hp(2.5)}}>Mulai jadi mitra itzeee!</Text>
            </View>
          </View>
          <View style={{flex:0.7, marginTop:hp(1), marginBottom:hp(2)}}>
            <View style={{width:"90%", alignSelf:"center"}}>
              <TextInputComp 
                icon="building"
                placeholder="Nama Mitra"
                placeholderTextColor="white"
                style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(fullname) => this.setState({fullname})}
              />
              <View style={{backgroundColor:"rgba(50, 52, 52, 0.2)", paddingTop:hp(1),paddingBottom:hp(1), flexDirection:"row", borderRadius:hp(1), marginBottom:hp(1)}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="briefcase" size={hp(2.3)} color="white"/>
                </View>
                <View style={{flex:0.77, justifyContent:"center"}}>
                  <ModalDropdown
                      defaultValue="Mitra Kerja"
                      textStyle={{color:"white", fontSize:hp(2)}}
                      style = {{paddingLeft:wp(0.8),paddingTop:hp(2), paddingBottom:hp(2)}}
                      options = {['Otomotif','Kesehatan','Teknologi', "Elektronik"]}
                      dropdownStyle = {{width:"70%", marginTop:hp(3), height:"auto", backgroundColor:"rgba(50, 52, 52, 0.9)"}}
                      dropdownTextStyle = {{color:"white", marginTop:hp(2.08), borderRadius:hp(2), fontSize:hp(2),backgroundColor:"rgba(50, 52, 52, 0.1)"}}
                  />
                </View>
                <View style={{flex:0.03}}>
                  <Icon name=" " size={hp(2.3)} color="white"/>
                </View>
              </View>
              <TextInputComp 
                icon="envelope"
                placeholder="Email"
                placeholderTextColor="white"
                style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}
              />
              <TextInputComp 
                icon="lock"
                placeholder="Buat Password"
                style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
                keyboardType="default"
                placeholderTextColor="white"
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
              <TouchableOpacity style={{height:hp(8),backgroundColor:"rgba(50, 52, 52, 0.5)", borderRadius:hp(1), justifyContent:"center", alignItems:"center"}} onPress={() =>this.props.navigation.navigate('RegStepOne')}>
                <Text style={{fontSize:hp(2.5),fontFamily:'sans-serif-thin', fontWeight:"bold", color:"white"}}>Daftar</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"column", marginTop:hp(10),marginBottom:hp(5), justifyContent:"center", alignItems:"center"}}>
              <TouchableOpacity style={{alignItems:"center"}}>
                <Text style={{fontSize:hp(2.5), color:"white", fontFamily:'sans-serif-thin'}}>Sudah punya akun itzeee?</Text>
              </TouchableOpacity>
              <View style={{flexDirection:"row", marginTop:hp(1)}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
                  <Text style={{textDecorationLine:"underline",fontFamily:'sans-serif-thin', fontWeight:"bold", fontSize:hp(2.5), color:"white"}}>Masuk</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor:"#f2f3f5"
  }
})

export default connect(mapStateToProps)(Registration)