import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

const App = () => {
  const [events, setEvents] = useState([
    {
      start: '2023-01-01 00:00:00',
      end: '2023-01-01 02:00:00',
      title: 'Estudar TN, MDC',
      summary: '',
    },
    {
      start: '2023-01-01 01:00:00',
      end: '2023-01-01 02:00:00',
      title: 'Praticar Exercícios',
      summary: '',
    },
    {
      start: '2023-01-02 00:30:00',
      end: '2023-01-02 01:30:00',
      title: 'Ágebra, func segundo grau',
      summary: 'parte3',
    },
    {
      start: '2023-01-03 01:30:00',
      end: '2023-01-03 02:20:00',
      title: 'rever lista de comb sobre inversão',
      summary: '',
    },
    {
      start: '2023-02-04 04:10:00',
      end: '2023-02-04 04:40:00',
      title: 'Começar grafos',
      summary: '',
    },
  ]);

  const eventClicked = (event) => {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          //Function on event press
          events={events}
          //passing the Array of event
          width={width}
          //Container width
          size={60}
          //number of date will render before and after initDate
          //(default is 30 will render 30 day before initDate and 29 day after initDate)
          initDate={'2023-01-01'}
          //show initial date (default is today)
          scrollToFirst
          //scroll to first event of the day (default true)
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
