import {StyleSheet} from 'react-native';
import {OtherSizes, SpaceSizes, TextSizes} from './dimensions';
import {Colors} from '.';

export const layouts = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerHorizontal: {
    justifyContent: 'center',
  },
  centerVertical: {
    alignItems: 'center',
  },
  listCardItem: {
    shadowColor: 'rgba(0,0,0, .1)',
    shadowOffset: {height: 15, width: 1},
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: OtherSizes.elevation,
    borderRadius: OtherSizes.largeCornerRadius,
    backgroundColor: Colors.white,
    padding: SpaceSizes.largeSpace,
  },
  listSeperatorSpace: {
    height: 20,
    width: 20,
  },
  listHeaderTitleTextStyle: {
    fontSize: TextSizes.largeText,
    fontWeight: '700',
  },
  /**
   * {@link Dashboard.js}
   */
  dashboardCardItemContextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dashboardCardItemContextSubTitleTextStyle: {
    fontSize: TextSizes.smallText,
    fontWeight: '600',
    color: Colors.coolGrey9,
    marginTop: 5,
    marginLeft: 2,
  },
  dashboardCardItemContextImageStyle: {width: 60, height: 60, margin: 10},
  /**
   * {@link Home.js}
   */
  tabScreenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabHeaderContainer: {
    padding: SpaceSizes.normalSpace,
  },
  tabHeaderTitleTextStyle: {
    fontSize: TextSizes.extremeLargeText,
    color: Colors.black,
    fontWeight: '800',
  },
  tabHeaderSubtitleTextStyle: {
    fontSize: TextSizes.normalText,
    color: Colors.coolGrey9,
    fontWeight: '500',
  },
  /**
   * {@link Login.js}
   */
  loginContainer: {
    flex: 1,
    backgroundColor: Colors.aiaRed,
  },
  loginTopContainer: {
    paddingBottom: 30,
  },
  loginBottomContainer: {
    marginTop: -30,
    paddingVertical: SpaceSizes.largeSpace,
    paddingHorizontal: SpaceSizes.extremeLargeSpace,
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: OtherSizes.largeCornerRadius,
    borderTopRightRadius: OtherSizes.largeCornerRadius,
  },
  loginBackgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginBackgroundVideoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(211, 17, 69, 0.75)',
  },
  loginHeaderTitleContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  loginHeaderTitleTextStyle: {
    color: Colors.white,
    fontSize: TextSizes.extremeLargeText,
    fontWeight: '800',
  },
  loginRegisterTextStyle: {
    color: Colors.aiaRed,
    fontWeight: 'bold',
  },
});
