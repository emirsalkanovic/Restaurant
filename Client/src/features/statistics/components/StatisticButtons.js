import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../style/statistic-style';

const StatisticButtons = (props) => {
    return(
        <View style={styles.dailyButtonsContainer}>
          <TouchableOpacity
            onPress={() => props.onButtonPress('total')}
            style={props.activeSection === 'total' ? styles.singleDaylyButtonActive : styles.singleDaylyButton}
          >
            <Text
              style={props.activeSection === 'total' ? styles.singleDailyButtonTextActive : styles.singleDailyButtonText}
            >
              Ukupni Promet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onButtonPress('table')}
            style={props.activeSection === 'table' ? styles.singleDaylyButtonActive : styles.singleDaylyButton}
          >
            <Text
              style={props.activeSection === 'table' ? styles.singleDailyButtonTextActive : styles.singleDailyButtonText}
            >
              Promet po stolovima
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onButtonPress('staff')}
            style={props.activeSection === 'staff' ? styles.singleDaylyButtonActive : styles.singleDaylyButton}
          >
            <Text
              style={props.activeSection === 'staff' ? styles.singleDailyButtonTextActive : styles.singleDailyButtonText}
            >
              Promet po osoblju
            </Text>
          </TouchableOpacity>
        </View>
    )
}

export default StatisticButtons;