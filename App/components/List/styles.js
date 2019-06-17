import { StyleSheet } from "react-native";
import {border} from '../../config/colors'

export default StyleSheet.create({
  separator: {
    marginLeft: 20,
    backgroundColor: border,
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
 row: {
   marginVertical: 10,
   paddingHorizontal: 10,
 },
 textTitle: {
   fontSize: 18,
   fontWeight: '500',
 },
 textDesc: {
   fontSize: 14,
 },
 time: {
  position: 'absolute',
  top: 0,
  right: 5,
   fontSize: 12,
   
 }
});
