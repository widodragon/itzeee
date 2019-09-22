import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, Image, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputPassword from '../../components/Auth/TextInputPassword';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/login';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
import Dialog, { DialogContent, ScaleAnimation } from 'react-native-popup-dialog';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : '',
      visible    : false
    }
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
  static navigationOptions = {
    title: 'Ubah Password',
    headerStyle: {
      backgroundColor: '#0969A5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(2)}}>
            <TextInputPassword 
              icon="lock"
              placeholder="Password Sebelumnya"
              style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="black"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInputPassword 
              icon="lock"
              placeholder="Password Baru"
              style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="black"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInputPassword 
              icon="lock"
              placeholder="Konfirmasi Password"
              style={{borderColor:"grey",fontFamily:'sans-serif-thin', fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="black"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity style={{height:hp(8),backgroundColor:"#0969A5", borderRadius:hp(1), justifyContent:"center",marginBottom:hp(2), alignItems:"center"}} onPress={()=>
              {
                this.setState({ visible: true })
                setTimeout(()=>{
                  this.setState({ visible: false });
                  this.props.navigation.goBack();
                }, 2000)
              }
            }>
              <Text style={{fontSize:hp(2.3), color:"white"}}>Lanjut</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Dialog
          visible={this.state.visible}
          dialogAnimation={
            new ScaleAnimation({
              initialValue: 0, // optional
              useNativeDriver: true, // optional
            })
          }
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <View>
              <Image source={require('../../assets/secure.png')} style={{width:200, height:200}} />
              <Text style={{fontSize:hp(2), alignSelf:"center"}}>Password berhasil diubah!</Text>
            </View>
          </DialogContent>
        </Dialog>
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
    backgroundColor:"#e3e1e1",
  }
})

export default connect(mapStateToProps)(ChangePassword)