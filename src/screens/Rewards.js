import React from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import PulseIndicator from '../components/PulseIndicator';
import {useGetRewards} from '../modules/network/NetworkApi';
import {SpaceSizes} from '../styles/dimensions';
import {layouts} from '../styles/layouts';

export default function Rewards() {
  const {data, isLoading, isError} = useGetRewards('en');

  var rewardsData = data && data.data;
  var contextView = null;

  var headerView = (
    <>
      <View style={[layouts.tabHeaderContainer, {paddingBottom: 0}]}>
        <Text style={layouts.tabHeaderTitleTextStyle}>Rewards</Text>
        <View style={[layouts.horizontal, {alignItems: 'center'}]}>
          <Image
            style={layouts.rewardsHeaderMedalIcon}
            source={require('../assets/images/medal.png')}
          />
          <View style={[layouts.vertical, {marginLeft: 12}]}>
            <Text style={layouts.rewardsHeaderTitleTxextStyle}>Gold</Text>
            <Text style={layouts.settingsHeaderProfileSubtitleTextStyle}>
              7,500 points
            </Text>
          </View>
        </View>
      </View>
    </>
  );
  if (isLoading) {
    contextView = (
      <View
        style={[layouts.container, {paddingHorizontal: SpaceSizes.largeSpace}]}>
        {headerView}
        <View style={[layouts.container, layouts.center]}>
          <PulseIndicator />
        </View>
      </View>
    );
  } else if (!isError) {
    contextView = (
      <FlatList
        style={{paddingHorizontal: SpaceSizes.largeSpace}}
        data={rewardsData.bronze}
        ListFooterComponent={<View style={{height: 50}} />}
        ListHeaderComponent={headerView}
        renderItem={(item) => <RenderCardItem item={item.item} />}
        ItemSeparatorComponent={() => (
          <View style={layouts.listSeperatorSpace} />
        )}
        keyExtractor={(item) => item.rewardId}
      />
    );
  }

  return (
    <View style={layouts.tabScreenContainer}>
      <SafeAreaView style={layouts.container}>{contextView}</SafeAreaView>
    </View>
  );
}

function RenderCardItem(props) {
  var item = props.item;

  return (
    <View
      style={[
        layouts.listCardItem,
        layouts.horizontal,
        {justifyContent: 'space-between'},
      ]}>
      <View style={layouts.rewardCardItemContainer}>
        <Text style={layouts.rewardsCardItemTitleTextStyle}>
          {item.partnerNama}
        </Text>
        <Text style={layouts.rewardsCardItemSubtitleTextStyle}>
          {item.rewardFigure}
        </Text>
        <Text style={layouts.rewardsCardItemCaptionTextStyle}>
          {item.expired}
        </Text>
      </View>
      <Image
        style={layouts.rewardsCardItemLogo}
        source={{uri: `https://www.aia.com.hk${item.logoFile}`}}
      />
    </View>
  );
}
