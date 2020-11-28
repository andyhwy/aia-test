/**
 * Use FlatList instead of SectionList for the section-based data, due to the UI design.
 */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppButton from '../components/AppButton';
import IconTextColumn from '../components/IconTextColumn';
import {Colors} from '../styles';
import {IconSizes, SpaceSizes} from '../styles/dimensions';
import {layouts} from '../styles/layouts';

const sections = [
  {
    id: 'a',
    title: 'General',
    data: [
      {id: '0', icon: 'language', title: 'Language', subtitle: 'English'},
      {id: '1', icon: 'bell', title: 'Notification', subtitle: 'On'},
    ],
  },
  {
    id: 'b',
    title: 'Devices',
    data: [
      {
        id: '2',
        icon: 'mobile',
        title: 'Linked Devices',
        subtitle: '2 devices are linked',
      },
      {
        id: '3',
        icon: 'fingerprint',
        title: 'Fingerprint Login',
        subtitle: 'On',
      },
    ],
  },
  {
    id: 'c',
    title: 'Other',
    data: [
      {
        id: '4',
        icon: 'file-alt',
        title: 'Terms & Conditions',
      },
      {id: '5', icon: 'info-circle', title: 'Contact Us'},
    ],
  },
  {id: 'e', title: 'Logout', data: []},
];

function RenderCardItem(props) {
  var item = props.item;

  return (
    <IconTextColumn
      leftIcon={item.icon}
      title={item.title}
      subtitle={item.subtitle}
    />
  );
}

function RenderSectionItem(props) {
  var section = props.item;
  const navigation = useNavigation();

  var view =
    section.id === 'e' ? (
      <AppButton
        style={{backgroundColor: Colors.aiaRed}}
        title="Logout"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}
      />
    ) : (
      <View style={layouts.listCardItem}>
        <Text style={[layouts.listHeaderTitleTextStyle, {marginBottom: 20}]}>
          {section.title}
        </Text>
        <FlatList
          data={section.data}
          renderItem={(item) => <RenderCardItem item={item.item} />}
          ItemSeparatorComponent={() => (
            <View style={layouts.listDividerStyle} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  return view;
}

export default function Settings(props) {
  return (
    <View style={layouts.tabScreenContainer}>
      <SafeAreaView style={layouts.container}>
        <FlatList
          style={{paddingHorizontal: SpaceSizes.largeSpace}}
          data={sections}
          ListFooterComponent={<View style={{height: 50}} />}
          ListHeaderComponent={
            <>
              <View style={layouts.tabHeaderContainer}>
                <Text style={layouts.tabHeaderTitleTextStyle}>Settings</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Profile');
                  }}>
                  <View style={layouts.settingsHeaderProfileContainer}>
                    <View style={[layouts.horizontal, {alignItems: 'center'}]}>
                      <Icon
                        name="user-circle"
                        size={IconSizes.settingProfileUserIcon}
                        color={Colors.coolGrey6}
                      />
                      <View style={[layouts.vertical, {marginLeft: 12}]}>
                        <Text
                          style={layouts.settingsHeaderProfileTitleTextStyle}>
                          Angel
                        </Text>
                        <Text
                          style={
                            layouts.settingsHeaderProfileSubtitleTextStyle
                          }>
                          View Profile
                        </Text>
                      </View>
                    </View>
                    <Icon name="chevron-right" size={20} color={Colors.black} />
                  </View>
                </TouchableOpacity>
              </View>
            </>
          }
          renderItem={(item) => <RenderSectionItem item={item.item} />}
          ItemSeparatorComponent={() => (
            <View style={layouts.listSeperatorSpace} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
