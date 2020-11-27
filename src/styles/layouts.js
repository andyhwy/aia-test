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
  loginHeaderTitleLayout: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  loginHeaderTitle: {
    color: Colors.white,
    fontSize: TextSizes.extremeLargeText,
    fontWeight: '800',
  },
  loginRegisterTextStyle: {
    color: Colors.aiaRed,
    fontWeight: 'bold',
  },
});
