import React, { Fragment, useEffect } from "react";
import { View, Image, FlatList } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import BaseText from "constants/BaseText";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import notificationStyle from 'theme/component/NotificationStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLHeader,
    RLText,
    RLButton,
} from 'basecomponent';
import { SafeAreaView } from "react-native-safe-area-context";
import RLShopkeeperList from "../../common/RLShopkeeperList";
import { inventoryActions } from "../../Redux/Reducers/Inventory";

const ShopList = ({ navigation, props }) => {
    const ShopCandidatesList = [
        { id: 1, title: 'LALAJI KI SHOP', time: 'Now' },
        { id: 2, title: 'CHAMAN KI SHOP', time: '1h ago' },
        { id: 3, title: 'SITARAM BHATOORE WALA.', time: '05 march 2021' },
    ]

    const categoryPopulorDataList = useSelector(state => state.Inventory.shopListMap)

    useEffect(() => {    }, [])
    const dispatch = useDispatch()

    const handleOnShopSelect = () => {
        dispatch(inventoryActions.setSelectedShop(1))
        navigation.navigate('Dashboard')
    }
    //================================ Start common Function ===========================================
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                titlebackgroundColor={Colors.white}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={BaseText.ShopList}
                showTitle={true}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Empty Notification
    const _renderEmptyNitification = () => {
        return (
            <View style={[viewStyle.flex, viewStyle.centerContain]}>
                <Image style={[notificationStyle.emptyImgStyle, notificationStyle.reSizeImg]}
                    source={Images.emptyNotification} />
                <RLText
                    text={BaseText.EmptyNotificationTitle}
                    style={[viewStyle.selfCenter, notificationStyle.emptyTitletxtStyle]} />
                <RLText
                    text={BaseText.HappyDay}
                    style={[viewStyle.selfCenter, notificationStyle.happytxtStyle]} />
                <RLButton
                    SimpleButton={true}
                    // onpress={() => navigation.navigate('Dashboard')}
                    simplebuttontext={BaseText.ReturnHome}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn, marginTop: 55 }]}
                />
            </View>
        )
    }

    //Notification
    const _renderShops = () => {
        return (
            <FlatList
                // nestedScrollEnabled
                style={{ marginBottom: 20 }}
                // bounces={false}
                data={Object.values(categoryPopulorDataList)}
                renderItem={({ item, index }) => _renderItemShopList({ item, index })}
                keyExtractor={item => item.id.toString()}
            />
        )
    }

    //Flatlist NotificationList Item
    const _renderItemShopList = ({ item, index }) => {
        return (
            <RLShopkeeperList
                shopkeeperName={item.title}
                replyTime={'Replies in 10 mins'}
                rateValue={'4.5'}
                ratestarValue={4.5}
                shopkeeperImg={item.img}
                onPress={handleOnShopSelect}
            />
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}

                <SafeAreaView contentContainerStyle={{ flexGrow: 1, }} bounces={false}>
                    {ShopCandidatesList.length > 0 && _renderShops()}
                    {ShopCandidatesList.length <= 0 && _renderEmptyNitification()}
                </SafeAreaView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(ShopList);