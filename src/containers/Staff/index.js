import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, FlatList, Image, Animated, TouchableHighlight, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text,SwipeRow, Content, Button, Header, Left, Body, Right,} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp,imgX, imgY} from '../../helpers/Responsive';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Dialog, ConfirmDialog } from 'react-native-simple-dialogs';

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

class Staff extends Component {
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
            <Left style={{flex:1, marginLeft:wp(2)}}>
              <Icon name='arrow-left' size={hp(2.5)} color="white"/>
            </Left>
            <Body style={{flex:1, justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:hp(2.5), color:"white", fontWeight:"bold"}}>Atur Staff</Text>
            </Body>
            <Right style={{flex:1, marginRight:wp(2)}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddStaff')}>
                <Icon name='plus' size={hp(2.5)} color="white" />
              </TouchableOpacity>
            </Right>
          </Header>
          <FlatList
            data={person}
            horizontal={false}
            renderItem={({item}) =>
              <SwipeRow
                style={{width:"90%", flex:1,borderRadius:hp(1),  alignSelf:"center",paddingBottom:hp(2), borderRadius:hp(1), paddingTop:hp(2), marginBottom:hp(-1)}}
                rightOpenValue={-100}
                body={
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailStaff')} style={{flex:1, height:hp(10), width:"90%", borderRadius:hp(1)}}>
                  <View style={{flex:1,backgroundColor:"white", flexDirection:"row"}}>
                    <View style={{flex:0.3, justifyContent:"center", alignItems:"center"}}>
                      <Image source={{uri:item.profile}} style={{width:imgX(20), height:imgY(20), borderRadius:imgY(10), resizeMode:"cover"}} />
                    </View>
                    <View style={{flex:0.5, flexDirection:"column", justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2), fontWeight:"bold"}}>{item.name}</Text>
                      <Text style={{fontSize:hp(2)}}>{item.jabatan}</Text>
                      <Text style={{fontSize:hp(1.5)}}>{item.telp}</Text>
                    </View>
                    <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                      <Image source={require('../../assets/star.png')} style={{width:imgX(10), height:imgY(10), resizeMode:"cover"}} />
                    </View>
                  </View>
                </TouchableOpacity>
                }
                right={
                  <View style={{marginRight:wp(5), marginTop:hp(6.5), flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChangeStaff')}>
                      <View style={{width:38, height:38, borderRadius:19, justifyContent:"center", alignItems:"center", backgroundColor:"blue"}}>
                        <Icon name="edit" size={hp(2)} color="white" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:wp(1)}} onPress={()=>this.setState({dialogVisible:true})}>
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
              message="Apakah anda yakin ingin menghapus data staff ini?"
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

export default connect(mapStateToProps)(Staff)