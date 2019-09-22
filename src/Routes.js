import React from 'react';
import {BackHandler, Image} from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import IntroApp from "./containers/Auth/IntroApp";
import Login from "./containers/Auth/Login";
import Registration from "./containers/Auth/Registration";
import RegStepOne from "./containers/Auth/RegStepOne";
import RegStepTwo from "./containers/Auth/RegStepTwo";
import RegStepThree from "./containers/Auth/RegStepThree";
import ChangePassword from "./containers/Auth/ChangePassword";
import OfflineNotice from "./helpers/OfflineNotice";
import Dashboard from "./containers/Dashboard";
import Bidding from "./containers/Bidding";
import DetailBidding from "./containers/Offering/DetailBidding";
import ProcessBidding from "./containers/Processed/ProcessBidding";
import DetailRequest from "./containers/Processed/DetailRequest";
import ProofDelivery from "./containers/Processed/ProofDelivery";
import Notification from "./containers/Notification";
import Work from "./containers/Work";
import Wallet from "./containers/Wallet";
import DetailDeposit from "./containers/Wallet/DetailDeposit";
import BankAccount from "./containers/Wallet/BankAccount";
import AddBankAccount from "./containers/Wallet/AddBankAccount";
import DetailWithdraw from "./containers/Wallet/DetailWithdraw";
import Withdraw from "./containers/Wallet/Withdraw";
import ConfirmWithdraw from "./containers/Wallet/ConfirmWithdraw";
import Staff from "./containers/Staff";
import AddStaff from "./containers/Staff/AddStaff";
import DetailStaff from "./containers/Staff/DetailStaff";
import ChangeStaff from "./containers/Staff/ChangeStaff";
import Profile from "./containers/Profile";
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from './helpers/Responsive';

const BiddingStack = createStackNavigator({
  Bidding: { screen: Bidding, navigationOptions: { header: null }}
});
const WorkStack = createStackNavigator({
  Work: { screen: Work, navigationOptions: { header: null }}
});
const tab=  createBottomTabNavigator(
  {
    HOME: {
      screen:Dashboard,
      navigationOptions: (navigation) => ({
          tabBarIcon: ({focused}) => (
              <Image source={focused?require('./assets/home-blue.png'):require('./assets/home-dark.png')} 
                style={{width:wp(4.5), height:hp(3)}}
              />
          )
      }),
    },
    BIDDING:{
      screen:BiddingStack,
      navigationOptions: (navigation) => ({
          tabBarIcon: ({focused}) => (
              <Image source={focused?require('./assets/bidding-blue.png'):require('./assets/bidding.png')} 
                style={{width:wp(4.5), height:hp(3)}}
              />
          )
      })
    },
    WORK: {
      screen:WorkStack,
      navigationOptions: (navigation) => ({
          tabBarIcon: ({focused}) => (
              <Image source={focused?require('./assets/work-blue.png'):require('./assets/work-dark.png')} 
                style={{width:wp(4.5), height:hp(3)}}
              />
          )
      })
    },
    PROFILE: {
      screen:Profile,
      navigationOptions: (navigation) => ({
          tabBarIcon: ({focused}) => (
              <Image source={focused?require('./assets/man-user-blue.png'):require('./assets/man-user.png')} 
                style={{width:wp(4.5), height:hp(3)}}
              />
          )
      })
    },
  },
  {
    tabBarOptions: {
      showLabel: true, // hide labels
      activeTintColor: 'blue', // active icon color
      inactiveTintColor: 'black',  // inactive icon color
      style: {
        backgroundColor: 'none',
        height:50
      },
      tabStyle: {
        overflow: 'hidden',
        shadowColor: 'green',
        shadowRadius: 10,
        shadowOpacity: 1,
      }
    },
    backBehavior:()=>{BackHandler.exitApp()}
  }
)


const Store = createStackNavigator({
  IntroApp: { screen: IntroApp, navigationOptions: { header: null }},
  Login: { screen: Login, navigationOptions: { header: null }},
  Registration: { screen: Registration, navigationOptions: { header: null }},
  RegStepOne: { screen: RegStepOne},
  RegStepTwo: { screen: RegStepTwo},
  RegStepThree: { screen: RegStepThree},
  Dashboard: { screen: tab, navigationOptions: { header: null }},
  Bidding: { screen: Bidding, navigationOptions: { header: null }},
  DetailBidding: { screen: DetailBidding},
  ProcessBidding: { screen: ProcessBidding},
  DetailRequest: { screen: DetailRequest},
  ProofDelivery: { screen: ProofDelivery},
  Wallet: { screen: Wallet, navigationOptions: { header: null }},
  Staff: { screen: Staff, navigationOptions: { header: null }},
  DetailStaff: { screen: DetailStaff, navigationOptions: { header: null }},
  AddStaff: { screen: AddStaff, navigationOptions: { header: null }},
  ChangeStaff: { screen: ChangeStaff, navigationOptions: { header: null }},
  BankAccount: { screen: BankAccount, navigationOptions: { header: null }},
  AddBankAccount: { screen: AddBankAccount},
  DetailDeposit: { screen: DetailDeposit },
  DetailWithdraw: { screen: DetailWithdraw },
  Withdraw: { screen: Withdraw },
  ConfirmWithdraw: { screen: ConfirmWithdraw },
  ChangePassword: { screen: ChangePassword }
}, {headerLayoutPreset: 'center'});
const App=createAppContainer(Store);

export default class Root extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
            <OfflineNotice />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    )
  }
}
