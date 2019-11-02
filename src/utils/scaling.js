import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const baseScale = size => (width / guidelineBaseWidth) * size;
const scale = (size, factor = 0.5) => size + (baseScale(size) - size) * factor;

export {scale};
