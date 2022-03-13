import React, { Fragment, useEffect , useState} from "react";
import { View, ScrollView, Image, FlatList } from "react-native";
import { connect } from 'react-redux';
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
    RLSearchProductList,
} from 'basecomponent';
import { SafeAreaView } from "react-native-safe-area-context";
import RLShopkeeperList from "../../common/RLShopkeeperList";

const ShopList = ({ navigation, props }) => {

    
    const SearchDataList = [
        { id: 1, categoryId: 0, title: 'Vionata', img: Images.ptVio, },
        { id: 2, categoryId: 0, title: 'Opuntia', img: Images.ptopu, },
        { id: 3, categoryId: 0, title: 'Annalis', img: Images.ptann, },
        { id: 4, categoryId: 0, title: 'Columnar', img: Images.ptcol, },
        { id: 5, categoryId: 0, title: 'Milaria', img: Images.ptmil, },
        { id: 6, categoryId: 0, title: 'Inca', img: Images.ptinc, },
        { id: 7, categoryId: 1, title: 'Floral', img: Images.kitchentools, },
        { id: 8, categoryId: 1, title: 'Emerald', img: Images.furniture, },
        { id: 9, categoryId: 1, title: 'Floral', img: Images.kitchentools, },
        { id: 10, categoryId: 1, title: 'Emerald', img: Images.furniture, },
        { id: 11, categoryId: 1, title: 'Floral', img: Images.kitchentools, },
        { id: 12, categoryId: 1, title: 'Emerald', img: Images.furniture, },
    ]
    const ArrayList1 = [] //Array1
    const ArrayList2 = [] //Array2
    const [data1, setData1] = useState([]);//Array1
    const [data2, setData2] = useState([]);//Array2

    useEffect(() => {
        SearchDataList.map((item, index) => {
            if (index % 2 == 0) {
                ArrayList1.push(item)
                setData1(ArrayList1)
            }
            else {
                ArrayList2.push(item)
                setData2(ArrayList2)
            }
        })  //Slice Array
    }, [])


    useEffect(() => {
    }, [])
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
                data={categoryPopulorDataList}
                renderItem={({ item, index }) => _renderItemShopList({ item, index })}
                keyExtractor={item => item.id.toString()}
            />
        )
    }

    const _renderSearchProduct = () => {
        return (
            <View style={[viewStyle.selfCenter, { marginBottom: 30 }]}>
                <FlatList
                    nestedScrollEnabled
                    contentContainerStyle={{ alignItems: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item, index }) => _renderItemSearchList2({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />

                {/* <FlatList
                    nestedScrollEnabled
                    contentContainerStyle={{ alignItems: 'flex-end' }}
                    showsVerticalScrollIndicator={false}
                    data={data2}
                    renderItem={({ item, index }) => _renderItemSearchList2({ item, index })}
                    keyExtractor={item => item.id.toString()}
                /> */}
            </View>
        )
    }

    //Flatlist SearchList2 Item
    const _renderItemSearchList2 = ({ item, index }) => {

        return (
            <RLSearchProductList
                imgBackgroundHeight={340}
                productName={item.title}
                productImg={item.img}
            // onPress={() => navigation.navigate('CheckOut')}
            />
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}

                <SafeAreaView>
                    {_renderSearchProduct()}
                </SafeAreaView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(ShopList);