import { SectionList } from 'react-native';
import {Text, View} from './Themed';
import { ColoredText } from './styled-text.component';
const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
      id: 1
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimp'],
      id: 2
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
      id: 3
    },
  ];
export function StyledSectionList() {
    return <>
    <SectionList sections={DATA} keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <ColoredText>{title}</ColoredText>
      )}></SectionList></>
}