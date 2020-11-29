import React from 'react';
import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import CircularProgressBar from '../components/CircularProgressBar';
import {Colors} from '../styles';
import {SpaceSizes} from '../styles/dimensions';
import {layouts} from '../styles/layouts';

const items = [
  {id: '0', title: 'Steps Today'},
  {id: '1', title: 'AIA Vitality Status'},
  {id: '2', title: 'Challenge in Progress'},
  {id: '3', title: 'Special Offers'},
  {id: '4', title: 'Heart Offer'},
];

function RenderListCardItem(props) {
  var item = props.item;
  var progress = props.progress;

  var view;
  switch (item.id) {
    default: {
      view = (
        <View style={layouts.listCardItem}>
          <Text style={layouts.listHeaderTitleTextStyle}>{item.title}</Text>
          <View style={layouts.dashboardCardItemContextContainer}>
            <View style={layouts.vertical}>
              <View style={[layouts.horizontal, layouts.centerVertical]}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: Colors.orange,
                  }}>
                  9,000
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: Colors.coolGrey9,
                  }}>
                  {' '}
                  / 12,500
                </Text>
              </View>
              <Text style={layouts.dashboardCardItemContextSubTitleTextStyle}>
                5.250 km
              </Text>
            </View>
          </View>
        </View>
      );
      break;
    }
    case '1': {
      view = (
        <View style={layouts.listCardItem}>
          <Text style={layouts.listHeaderTitleTextStyle}>{item.title}</Text>
          <View style={layouts.dashboardCardItemContextContainer}>
            <View style={layouts.vertical}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'gold',
                }}>
                Gold
              </Text>
              <Text style={layouts.dashboardCardItemContextSubTitleTextStyle}>
                7,500 points{'\n'}Only 2,000 points to reach Platinum
              </Text>
            </View>
            <Image
              style={layouts.dashboardCardItemContextImageStyle}
              source={require('../assets/images/medal.png')}
            />
          </View>
        </View>
      );
      break;
    }
    case '2': {
      view = (
        <View style={layouts.listCardItem}>
          <Text style={layouts.listHeaderTitleTextStyle}>{item.title}</Text>
          <View style={layouts.dashboardCardItemContextContainer}>
            <View style={layouts.vertical}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: Colors.blue,
                }}>
                750 points
              </Text>
              <Text style={layouts.dashboardCardItemContextSubTitleTextStyle}>
                1 Months{'\n'}Stay Active
              </Text>
            </View>
            <CircularProgressBar progress={progress} size={75} />
          </View>
        </View>
      );
      break;
    }
    case '3': {
      view = (
        <View style={[layouts.listCardItem, {padding: 0}]}>
          <Image
            style={[layouts.dashboardCardItemImageStyle, {aspectRatio: 1.5}]}
            resizeMode="cover"
            source={{
              uri:
                'https://www.aia.com.hk/content/dam/hk-vitality/clientlibs/img/png/health_quiz_card_TC.jpg',
            }}
          />
        </View>
      );
      break;
    }
    case '4': {
      view = (
        <View style={[layouts.listCardItem, {padding: 0}]}>
          <Image
            style={[layouts.dashboardCardItemImageStyle, {aspectRatio: 0.8}]}
            resizeMode="cover"
            source={{
              uri:
                'https://www.aia.com.hk/content/dam/hk-vitality/clientlibs/img/png/pass_thru_main_EN.jpg',
            }}
          />
        </View>
      );
      break;
    }
  }
  return view;
}

export default function Dashboard() {
  return (
    <View style={layouts.tabScreenContainer}>
      <SafeAreaView style={layouts.container}>
        <FlatList
          style={{paddingHorizontal: SpaceSizes.largeSpace}}
          data={items}
          ListFooterComponent={<View style={{height: 50}} />}
          ListHeaderComponent={
            <>
              <View style={layouts.tabHeaderContainer}>
                <Text style={layouts.tabHeaderTitleTextStyle}>Home</Text>
                <Text style={layouts.tabHeaderSubtitleTextStyle}>
                  Welcome to AIA Test
                </Text>
              </View>
            </>
          }
          renderItem={(item) => (
            <RenderListCardItem item={item.item} progress={2 / 31} />
          )}
          ItemSeparatorComponent={() => (
            <View style={layouts.listSeperatorSpace} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
