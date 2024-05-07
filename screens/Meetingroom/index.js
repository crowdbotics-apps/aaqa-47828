import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const MeetingRoomInfoScreen = () => {
  const meetingRoomData = {
    name: 'Skyline Boardroom',
    location: '25th Floor, Tech Park',
    capacity: '12 People',
    amenities: ['WiFi', 'Teleconferencing', 'Projector', 'Whiteboard'],
    description: 'Spacious and well-lit, our Skyline Boardroom is perfect for your next meeting or presentation. Equipped with state-of-the-art technology to ensure your meeting goes smoothly.',
    image: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{
        uri: meetingRoomData.image
      }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{meetingRoomData.name}</Text>
          <Text style={styles.location}>{meetingRoomData.location}</Text>
          <Text style={styles.capacity}>{meetingRoomData.capacity}</Text>
          <View style={styles.amenitiesContainer}>
            {meetingRoomData.amenities.map((amenity, index) => <Text key={index} style={styles.amenity}>
                {amenity}
              </Text>)}
          </View>
          <Text style={styles.description}>{meetingRoomData.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: '100%',
    height: 200
  },
  infoContainer: {
    padding: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10
  },
  capacity: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20
  },
  amenity: {
    marginRight: 10,
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 14,
    color: '#333',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: '#666'
  }
});
export default MeetingRoomInfoScreen;