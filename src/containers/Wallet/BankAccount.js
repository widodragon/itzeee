import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, FlatList, Image, Animated,TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text,SwipeRow, Content, Button, Header, Left, Body, Right,} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp,imgX, imgY} from '../../helpers/Responsive';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Dialog, ConfirmDialog } from 'react-native-simple-dialogs';

const bank_list = [
  {
    id:1,
    icon:'https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png',
    name:'PT.Bank Centra Asia',
    no : '****6258',
    user : 'Experside'
  },
  {
    id:2,
    icon:'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png',
    name:'PT.Bank Negara Indonesia',
    no : '****6258',
    user : 'Experside'
  }
]
const person=[
  {
    id:1,
    name:"Budi Hartanto",
    profile:"https://cdn.pixabay.com/photo/2016/10/09/18/03/smile-1726471__340.jpg",
    jabatan:"Staff Surveyor",
    telp:"+6287343243244",
    bintang:4
  },
  {
    id:2,
    name:"Budi Hartanto",
    profile:"https://cdn.pixabay.com/photo/2016/10/09/18/03/smile-1726471__340.jpg",
    jabatan:"Staff Surveyor",
    telp:"+6287343243244",
    bintang:4
  },
  {
    id:3,
    name:"Budi Hartanto",
    profile:"https://cdn.pixabay.com/photo/2016/10/09/18/03/smile-1726471__340.jpg",
    jabatan:"Staff Surveyor",
    telp:"+6287343243244",
    bintang:4
  },
]

class BankAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : '',
      dialogVisible:false
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
  // static navigationOptions = {
  //   title: 'Atur Staff',
  //   headerStyle: {
  //     backgroundColor: '#0969A5',
  //   },
  //   headerRight: (
  //     <View style={{marginRight:wp(5)}}>
  //       <TouchableOpacity>
  //         <Icon name="plus" size={hp(2)} color="white" />
  //       </TouchableOpacity>
  //     </View>
  //   ),
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // };
  onTrash=()=>{
    alert("hhhfghf")
  }

  render() {
    return (
      <View style={styles.container}>
          <Header>
            <Left style={{marginLeft:wp(2)}}>
              <Icon name='arrow-left' size={hp(2.5)} color="white"/>
            </Left>
            <Body style={{flex:1,marginLeft:wp(15), justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:hp(2.5), color:"white", fontWeight:"bold"}}>Atur Akun Bank</Text>
            </Body>
            <Right style={{marginRight:wp(2)}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddBankAccount')}>
                <Icon name='plus' size={hp(2.5)} color="white" />
              </TouchableOpacity>
            </Right>
          </Header>
          <FlatList
            data={bank_list}
            horizontal={false}
            renderItem={({item}) =>
              <SwipeRow
                style={{width:"90%", flex:1,borderRadius:hp(1),  alignSelf:"center",paddingBottom:hp(2), borderRadius:hp(1), paddingTop:hp(2), marginBottom:hp(-1)}}
                rightOpenValue={-100}
                body={
                  <TouchableNativeFeedback onPress={() =>{}} >
                    <View style={{flexDirection:"row", marginTop:hp(1), paddingTop:hp(2), paddingBottom:hp(2), backgroundColor:"white", width:"100%", borderRadius:hp(0.5), alignSelf:"center"}}>
                      <View style={{flex:0.1}}></View>
                      <View style={{flex:0.2, justifyContent:"center"}}>
                        <Image source={{uri:item.icon}} style={{width:"100%",height:hp(3), resizeMode:"cover"}} />
                      </View>
                      <View style={{flex:0.1}}></View>
                      <View style={{flex:0.6, justifyContent:"center", flexDirection:"column"}}>
                        <Text style={{fontSize:hp(2), fontWeight:"bold"}}>{item.name}</Text>
                        <Text style={{fontSize:hp(2)}}>{item.no}</Text>
                        <Text style={{fontSize:hp(1.5)}}>{item.user}</Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                }
                right={
                  <View style={{marginRight:wp(2), marginTop:hp(8), flexDirection:"row"}}>
                    <TouchableOpacity style={{marginLeft:wp(10)}} onPress={()=>this.setState({dialogVisible:true})}>
                      <View style={{width:38, height:38, borderRadius:19, justifyContent:"center", alignItems:"center", backgroundColor:"red"}}>
                        <Icon name="trash" size={hp(2)} color="white" />
                      </View>
                    </TouchableOpacity>
                  </View>
                }
              />
            }
            keyExtractor={item => item.id.toString()}
          />
          <ConfirmDialog
              message="Apakah anda yakin ingin menghapus data akun bank ini?"
              visible={this.state.dialogVisible}
              onTouchOutside={() => this.setState({dialogVisible: false})}
              positiveButton={{
                  title: "Ya, hapus sekarang",
                  onPress: () => alert("Yes touched!")
              }}
              negativeButton={{
                  title: "Batalkan",
                  onPress: () => alert("No touched!")
              }}
          />
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

export default connect(mapStateToProps)(BankAccount)