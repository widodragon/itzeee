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
class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : ''
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
    title: 'Ubah Profil Staff',
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
        <Header>
          <Left style={{flex:1, marginLeft:wp(2)}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Icon name='arrow-left' size={hp(2.5)} color="white"/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:hp(2.5), color:"white", fontWeight:"bold"}}>Tambah Staff</Text>
          </Body>
          <Right style={{flex:1, marginRight:wp(2)}}>
          </Right>
        </Header>
        <ScrollView>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(2)}}>
            <TextInputDefault 
              placeholder="Nama Lengkap"
              placeholderTextColor="grey"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(fullname) => this.setState({fullname})}
            />
            <View style={{backgroundColor:"white", paddingTop:hp(1),paddingBottom:hp(1), flexDirection:"row", borderRadius:hp(1), marginBottom:hp(2)}}>
              <View style={{flex:0.02, justifyContent:"center", alignItems:"center"}}>
              </View>
              <View style={{flex:0.95, justifyContent:"center"}}>
                <Picker selectedValue = {this.state.religious} onValueChange = {this.updateReligious}>
                   <Picker.Item color="grey" label = "Role Staff" value = "Role Staff" />
                   <Picker.Item color="grey" label = "Otomotif" value = "otomotif" />
                   <Picker.Item color="grey" label = "Teknologi" value = "teknologi" />
                   <Picker.Item color="grey" label = "Kesehatan" value = "kesehatan" />
                </Picker>
              </View>
              <View style={{flex:0.03}}></View>
            </View>
            <TextInputDefault
              placeholder="Email"
              placeholderTextColor="grey"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
            />
            <TextInputDefault 
              placeholder="Password"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="grey"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInputDefault 
              placeholder="Nomor NPWP"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="grey"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInputDefault 
              placeholder="Alamat Lengkap"
              multiline = {true}
              numberOfLines = {4}
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="grey"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInputDefault 
              placeholder="Kota"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="grey"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInputDefault 
              placeholder="Nomor Telepon"
              style={{borderColor:"grey", fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
              keyboardType="default"
              placeholderTextColor="grey"
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <View style={{backgroundColor:"white", paddingTop:hp(1),paddingBottom:hp(1), flexDirection:"row", borderRadius:hp(1), marginBottom:hp(2)}}>
              <View style={{flex:0.02, justifyContent:"center", alignItems:"center"}}>
              </View>
              <View style={{flex:0.95, justifyContent:"center"}}>
                <Picker selectedValue = {this.state.religious} onValueChange = {this.updateReligious}>
                   <Picker.Item color="grey" label = "Status" value = "Status" />
                   <Picker.Item color="grey" label = "Otomotif" value = "otomotif" />
                   <Picker.Item color="grey" label = "Teknologi" value = "teknologi" />
                   <Picker.Item color="grey" label = "Kesehatan" value = "kesehatan" />
                </Picker>
              </View>
              <View style={{flex:0.03}}></View>
            </View>
            <TouchableOpacity style={{height:hp(8),backgroundColor:"#0969A5", borderRadius:hp(1), justifyContent:"center",marginBottom:hp(2), alignItems:"center"}} onPress={() =>this.props.navigation.navigate("RegStepTwo")}>
              <Text style={{fontSize:hp(2.3), color:"white"}}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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

export default connect(mapStateToProps)(AddStaff)