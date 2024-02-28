import { ScrollView, StyleSheet } from 'react-native';
import { StyledSectionList } from '@/components/styled-sectionList.component';
import { HelloButton } from '@/components/eventClick.component';
import { ConditionButton } from '@/components/conditionButton';
import { ListItem } from '@/components/liste-component';
import { Changement_Valeur } from '@/components/useStateIncrement';
import React from 'react';
import { View } from '@/components/Themed';
import { LoaderComponenet} from '@/components/useEffect';
import { SinceCounter } from '@/components/hookPerso';
import { ThreeScreen } from '@/components/useReducer';

export default function TabOneScreen() {
  return (
    <>
    <ScrollView>
      <ThreeScreen/>
      <StyledSectionList />
      <SinceCounter/>
      <HelloButton
        title={'Click here to say HELLO'}
        sayHello={() => console.log('Hello')}
      />
      <View>
        <ConditionButton error={true} />
        <ConditionButton loading={true} />
        <ConditionButton loading={false} title="Title" />
      </View>
      <ListItem />
      <Changement_Valeur />
      <LoaderComponenet>
      </LoaderComponenet>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
