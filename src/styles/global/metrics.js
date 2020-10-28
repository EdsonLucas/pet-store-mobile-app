import { PixelRatio, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
};

const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  );
};

export default {
  basePadding: 30,
  baseMargin: 10,
  baseRadius: 4,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? width : height,
  widthPercentageToDP,
  heightPercentageToDP,
};
