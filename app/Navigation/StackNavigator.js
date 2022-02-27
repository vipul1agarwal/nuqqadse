//StackNavigator File 
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "component/Home/Home";
import SearchProduct from "component/SearchProduct/SearchProduct";
import AppIntro from "component/AppIntro/AppIntro";
import SignIn from "component/SignIn/SignIn";
import SignUpName from "component/SignUp/SignUpName";
import SignUpPhone from "component/SignUp/SignUpPhone";
import Security from "component/Security/Security";
import ShopList from "component/ShopList/ShopList";
import ForgotPassword from "component/Forgot/ForgotPassword";
import Email from "component/Forgot/Email";
import Phone from "component/Forgot/Phone";
import NewPassword from "component/Forgot/NewPassword";
import CheckOut from "component/CheckOut/CheckOut";
import Payment from "component/Payment/Payment";
import Scanner from "component/Payment/Scanner";
import TopUp from "component/TopUp/TopUp";
import TabNavigator from "./TabNavigator";
import AddCart from "component/SearchProduct/AddCart";
import Category from "component/Category/Category";
import SubCategory from "component/Category/SubCategory";
import PaymentType from "component/Payment/PaymentType";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'AppIntro'}
            headerMode={false}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AppIntro" component={AppIntro} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUpName} />
            <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="ShopList" component={ShopList} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Phone" component={Phone} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="Dashboard" component={TabNavigator} />
            <Stack.Screen name="SearchProduct" component={SearchProduct} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="TopUp" component={TopUp} />
            <Stack.Screen name="AddCart" component={AddCart} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="SubCategory" component={SubCategory} />
            <Stack.Screen name="PaymentType" component={PaymentType} />
        </Stack.Navigator>
    );
}



export { StackNavigator };