import React, { Component } from 'react';
import {Alert, ToastAndroid, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp} from '../../helpers/Responsive';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right, Icon, Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import { updateCart, getMenu, addCart } from '../../redux/actions/promotions';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent : [],
      menu : [],
      page : 1,
      isLoading:false,
      checkNoSame:0
    }
  }
  componentDidMount(){
    this.dataMenu();
  }
  dataMenu=async()=>{
    try{
      this.setState({isLoading:true})
      const src=await this.props.dispatch(getMenu());
      this.setState({menu:src.value.data});
      this.setState({isLoading:false})
    }catch(e){
      alert(e)
    }    
  }
  addToCart=async(id,product,price, image)=>{
    this.setState({checkNoSame:0});
    let newCart={
      quantity:1,
      subtotal:price,
      id:id,
      product:product,
      price:price,
      image:image
    }
    const res= await this.props.cart.cart;
    if(res.length>0){
      let i=0;
      let position;
      //algoritma sequential search
      while(this.state.checkNoSame==0 && i<res.length){
        if(res[i].id==id){
          this.setState({checkNoSame:1});
          position=i;
        }else{
          i=i+1
        }
      }
      if(this.state.checkNoSame==1){
        let cartSementara = [];
        for(let i=0;i<res.length;i++){
          if(res[i].id!=id){
            cartSementara.push(res[i]);
          }else{
            let data={...res[i],quantity:(Number(res[i].quantity)+1),subtotal:((Number(res[i].quantity)+1)*res[i].price)};
            cartSementara.push(data);
          }
        }
        await this.props.dispatch(updateCart(cartSementara));
        ToastAndroid.showWithGravity(
          'Jumlah produk ditambahkan!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }else{
        await this.props.dispatch(addCart(newCart));
        ToastAndroid.showWithGravity(
          'Produk berhasil ditambahkan ke keranjang!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        ); 
      }
    }else{
      await this.props.dispatch(addCart(newCart));
      ToastAndroid.showWithGravity(
        'Produk berhasil ditambahkan ke keranjang!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );      
    }
  }
  async onExit(){
    try{
      await AsyncStorage.removeItem('token');
      this.props.navigation.navigate('Login');
    }catch(e){
      alert("e");
    }
  }
  render() {
    return (
      <Container style={{flex:1}}>
        <ScrollView style={{backgroundColor:"#f0eee9"}}>
          <View>{this.state.isLoading?<Spinner color="red" />:null}</View>
          <View style={styles.promotionBox}>
            <FlatList
              data={this.state.menu}
              horizontal={false}
              renderItem={({item}) =>
              <View>
                <TouchableNativeFeedback onPress={() => this._onDetail(item.id)} >
                  <Card>
                    <CardItem cardBody>
                      <Image source={{uri: item.image}} style={{height: 120, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem cardBody style={{paddingLeft:20, marginTop:15}}>
                      <View>
                        <Text>{item.product}</Text>
                        <Text>Deskripsi : {item.detail}</Text>
                        <Text style={{color:"red", fontSize:12}}>Harga : {item.price}</Text>
                      </View>
                    </CardItem>
                    <CardItem style={{flexDirection:"row"}}>
                      <View style={{flex:0.5, marginLeft:5, marginRight:5}}>
                        <Button onPress={()=>this.addToCart(item.id, item.product, item.price, item.image)} light full><Text> ADD TO CART </Text></Button>
                      </View>
                      <View style={{flex:0.5, marginLeft:5, marginRight:5}}>
                        <Button light full><Text> VIEW DETAIL </Text></Button>
                      </View>
                    </CardItem>
                  </Card>
                </TouchableNativeFeedback>
              </View>
              }
              keyExtractor={item => item.product}
            />
          </View>
        </ScrollView> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  promotionBox:{
    backgroundColor:"white",
    marginTop:5,
    marginBottom:5,
    paddingLeft:10
  },
  dashboardMenu:{
    flex:0.3,
    marginTop:75,
    width:"100%",
    flexDirection:"column",
    alignSelf:"center",
    height:150,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    paddingTop:5,
    paddingBottom:5
  },
  iconMenu:{
    textAlign:"center",
  },
  iconBox:{
    flex:0.25,
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  iconCircle:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:25
  }
});

const mapStateToProps = (state) => {
  return {
    cart: state.promotions
  }
}


export default connect(mapStateToProps)(Notification)