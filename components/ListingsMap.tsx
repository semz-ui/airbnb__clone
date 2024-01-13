import React, { memo } from "react";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { StyleSheet, View, Text } from "react-native";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

interface Props {
  listings: any;
}
const ListingsMap = memo(({ listings }: Props) => {
  const router = useRouter();
  const onMarkerSelected = (e: any) => {
    console.log(e);
    router.push(`/listing/${e.properties.id}`);
  };
  const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 9,
    longitudeDelta: 9,
  };
  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties.point_count;

    return (
      <Marker
        key={`cluster-${id}`}
        onPress={onPress}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
      >
        <View style={styles.minMarker} />
      </Marker>
    );
  };
  return (
    <View style={defaultStyles.container}>
      <MapView
        animationEnabled={false}
        initialRegion={INITIAL_REGION}
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-sb"
        showsUserLocation
        showsMyLocationButton
        renderCluster={renderCluster}
      >
        {listings.features.map((item: any) => {
          return (
            <Marker
              onPress={() => onMarkerSelected(item)}
              coordinate={{
                latitude: item.properties.latitude,
                longitude: item.properties.longitude,
              }}
              key={item.properties.id}
            >
              <View style={styles.marker}>
                <Text style={styles.markerText}>${item.properties.price}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 30,
    height: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-sb",
  },
  minMarker: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 20,
    height: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
export default ListingsMap;
