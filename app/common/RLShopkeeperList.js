import React from "react";
import { View, TouchableOpacity, Image, ImageBackground, TouchableWithFeedback } from "react-native";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import popularListStyle from 'theme/component/PopularListStyle';
import viewStyle from 'theme/component/ViewStyle';
import { Rating } from "react-native-ratings";
import RLText from './RLText'
import ENV from 'env/index';

const RLShopkeeperList = (props) => {

    const {
        shopkeeperName,
        replyTime,
        rateValue,
        ratestarValue,
        shopkeeperImg,
        onPress,
    } = props;
    // console.log(onPress)
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[viewStyle.centerViewStyle, viewStyle.rowdirections, popularListStyle.mainViewStyle]}>
                <ImageBackground
                    style={[popularListStyle.productImgViewStyle, { backgroundColor: 'pink' }]}
                    imageStyle={[popularListStyle.productImgViewStyle]}
                    source={shopkeeperImg}
                />
                <View style={[popularListStyle.detailmainViewStyle, viewStyle.selfCenter]}>
                    <View style={[viewStyle.rowdirections, { justifyContent: 'space-between', }]}>
                        <RLText
                            text={shopkeeperName}
                            RlnumberOfLines={1}
                            style={[popularListStyle.pnametxtStyle]}
                        />
                        <TouchableOpacity >
                            <Image
                                source={Images.lovered}
                                style={[popularListStyle.heartImgStyle, popularListStyle.resizeImg]} />
                        </TouchableOpacity>
                    </View>

                    <RLText
                        text={replyTime}
                        RlnumberOfLines={1}
                        style={popularListStyle.pricetxtStyle}
                    />

                    <View style={[viewStyle.rowdirections, popularListStyle.ratemainViewStyle]}>
                        <View style={[viewStyle.rowdirections, { alignItems: 'center' }]}>
                            <Rating
                                type='custom'
                                imageSize={10}
                                startingValue={ratestarValue}
                                readonly={true}
                            />
                            <RLText
                                text={rateValue}
                                style={{ fontSize: 10, color: Colors.darkGray, paddingLeft: 10, fontFamily: ENV.nfontFamilyRegular }}
                            />
                        </View>
                        {/* <TouchableOpacity style={[popularListStyle.cartbtnStyle]} >
                            <Image
                                source={Images.popularCart}
                                style={[popularListStyle.cartImgStyle, popularListStyle.resizeImg]} />
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};
export default RLShopkeeperList;