import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, Image, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text, Header, Left, Right, Body} from "native-base";
import {getLogin} from '../../redux/actions/login';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
import Dialog, { DialogContent, ScaleAnimation } from 'react-native-popup-dialog';
class AddBankAccount extends Component {
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
    title: 'Tambah Akun Bank',
    headerStyle: {
      backgroundColor: '#0969A5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
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
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(2)}}>
            <View style={{backgroundColor:"white", paddingTop:hp(1),paddingBottom:hp(1), flexDirection:"row", borderRadius:hp(1), marginBottom:hp(2)}}>
              <View style={{flex:0.02, justifyContent:"center", alignItems:"center"}}>
              </View>
              <View style={{flex:0.95, justifyContent:"center"}}>
                <Picker selectedValue = {this.state.religious} onValueChange = {this.updateReligious}>
                   <Picker.Item color="grey" label = "Negara" value = "Role Staff" />
                   <Picker.Item color="grey" label = "Otomotif" value = "otomotif" />
                   <Picker.Item color="grey" label = "Teknologi" value = "teknologi" />
                   <Picker.Item color="grey" label = "Kesehatan" value = "kesehatan" />
                </Picker>
              </View>
              <View style={{flex:0.03}}></View>
            </View>
            <TextInputDefault
              placeholder="Nama Bank"
              placeholderTextColor="grey"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
            />
            <TextInputDefault 
              placeholder="Nomor Rekening"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="grey"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInputDefault 
              placeholder="Nama"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="grey"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity style={{height:hp(8),backgroundColor:"#0969A5", borderRadius:hp(1), justifyContent:"center",marginBottom:hp(2), alignItems:"center"}} onPress={() =>this.setState({visible:true})}>
              <Text style={{fontSize:hp(2.3), color:"white"}}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Dialog
          visible={this.state.visible}
          rounded={false}
          footer={
            <View style={{flexDirection:"row", marginBottom:hp(5), marginRight:hp(2), justifyContent:"space-between"}}>
              <View style={{flex:0.5}} />
              <TouchableOpacity style={{flex:0.5, alignItems:"flex-end"}} onPress={()=>this.setState({ visible: false })}>
                <Text style={{color:"red"}}>Batalkan</Text>
              </TouchableOpacity>
            </View>
          }
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
          <DialogContent 
            style={{ 
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: 0,
            }}
          >
            <View style={{width:"100%", alignSelf:"center"}}>
              <TouchableOpacity onPress={() =>{}} >
                <View style={{flexDirection:"row", marginTop:hp(1), paddingTop:hp(2), paddingBottom:hp(2), backgroundColor:"white", width:"100%", borderRadius:hp(0.5), alignSelf:"center"}}>
                  <View style={{flex:0.1}}></View>
                  <View style={{flex:0.2, justifyContent:"center"}}>
                    <Image source={{uri:'https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png'}} style={{width:"100%",height:hp(3), resizeMode:"cover"}} />
                  </View>
                  <View style={{flex:0.1}}></View>
                  <View style={{flex:0.6, justifyContent:"center", flexDirection:"column"}}>
                    <Text style={{fontSize:hp(2), fontWeight:"bold"}}>PT.Bank Centra Asia</Text>
                    <Text style={{fontSize:hp(2)}}>****6258</Text>
                    <Text style={{fontSize:hp(1.5)}}>Experside</Text>
                  </View>
                </View>
              </TouchableOpacity>
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

export default connect(mapStateToProps)(AddBankAccount)