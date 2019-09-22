import { Dimensions, PixelRatio } from 'react-native'
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const hp = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
export const wp = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100)
export const imgX = x => PixelRatio.getPixelSizeForLayoutSize(x)
export const imgY = x => PixelRatio.getPixelSizeForLayoutSize(x)