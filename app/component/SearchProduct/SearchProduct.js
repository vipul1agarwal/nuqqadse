import React, { Fragment, useEffect, useState } from "react";
import { View, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import searchProductStyle from 'theme/component/SearchProductStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLHeader,
    RLText,
    RLSearchProductList
} from 'basecomponent';

const SearchProduct = ({ navigation, props }) => {
    let fieldSearchRef = React.createRef();

    const SearchDataList = [
        { id: 1, title: 'Orange Summer', img: Images.serOr, },
        { id: 2, title: 'Peach Kiss', img: Images.serPeach, },
        { id: 3, title: 'Puf Seleve', img: Images.serpuf, },
        { id: 4, title: 'Saphire Suit', img: Images.serSaphi, },
        { id: 5, title: 'Floral', img: Images.serFlo, },
        { id: 6, title: 'Emerald', img: Images.serEme, },
        // { id: 7, title: 'Floral', img: Images.kitchentools, },
        // { id: 8, title: 'Emerald', img: Images.furniture, },
        // { id: 9, title: 'Floral', img: Images.kitchentools, },
        // { id: 10, title: 'Emerald', img: Images.furniture, },
        // { id: 11, title: 'Floral', img: Images.kitchentools, },
        // { id: 12, title: 'Emerald', img: Images.furniture, },
    ]
    const ArrayList1 = []//Array1
    const ArrayList2 = []//Array2
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
    //================================ Start common Function ===========================================
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {

    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                SearchHeader={true}
                cartImg={Images.shoppingCart}
                placeholder={BaseText.Search}
                onEditTextField={(value) => _onChangeTextField(value, 'search')}
                onSubmitEditing={() => _onSubmitEditing(fieldSearchRef)}
                refKey={'search'}
                fieldRef={fieldSearchRef} />
        )
    }

    //Filter
    const _renderFillter = () => {
        return (
            <View style={[viewStyle.centerViewStyle, viewStyle.rowdirections, searchProductStyle.filterViewStyle]}>
                <RLText
                    RlnumberOfLines={1}
                    text={'20 Items Found'}
                    style={searchProductStyle.foundtxtStyle}
                />

                <View style={[viewStyle.rowdirections, { alignItems: 'center' }]}>
                    <TouchableOpacity>
                        <Image
                            style={[searchProductStyle.filImgStyle, searchProductStyle.imgeresize]}
                            source={Images.fillter}
                        />
                    </TouchableOpacity>
                    <RLText
                        RlnumberOfLines={1}
                        text={BaseText.Filters}
                        style={searchProductStyle.filtertxtStyle}
                    />
                </View>
            </View>
        )
    }

    //Search Product
    const _renderSearchProduct = () => {
        return (
            <View style={[viewStyle.rowdirections, viewStyle.centerViewStyle, { marginBottom: 30 }]}>
                <FlatList
                    nestedScrollEnabled
                    contentContainerStyle={{ alignItems: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item, index }) => _renderItemSearchList1({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />

                <FlatList
                    nestedScrollEnabled
                    contentContainerStyle={{ alignItems: 'flex-end' }}
                    showsVerticalScrollIndicator={false}
                    data={data2}
                    renderItem={({ item, index }) => _renderItemSearchList2({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }

    //Flatlist SearchList1 Item
    const _renderItemSearchList1 = ({ item, index }) => {
        return (
            <RLSearchProductList
                imgBackgroundHeight={index % 2 == 0 ? 262 : 169}
                productName={item.title}
                productImg={item.img}
                onPress={() => navigation.navigate('AddCart')} />
        )
    }

    //Flatlist SearchList2 Item
    const _renderItemSearchList2 = ({ item, index }) => {
        return (
            <RLSearchProductList
                imgBackgroundHeight={index % 2 == 0 ? 169 : 262}
                productName={item.title}
                productImg={item.img}
                onPress={() => navigation.navigate('AddCart')}
            />
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor, { backgroundColor: Colors.lightgray }]}>
                <GeneralStatusBarColor backgroundColor={Colors.lightgray}
                    barStyle={"dark-content"} />
                {_header()}

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    {_renderFillter()}
                    {_renderSearchProduct()}
                </ScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(SearchProduct);