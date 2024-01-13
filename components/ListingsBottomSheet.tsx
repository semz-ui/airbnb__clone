import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const ListingsBottomSheet = ({ listings, category }: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [refresh, setRefresh] = useState(0);
  const snapPoint = useMemo(() => ["10%", "100%"], []);
  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoint}
      enablePanDownToClose={false}
      index={1}
      style={styles.sheetContainer}
      handleIndicatorStyle={{ borderStartColor: Colors.gray }}
    >
      <View style={{ flex: 1 }}>
        <Listings catergory={category} listings={listings} refresh={refresh} />
      </View>
      <View style={styles.absoluteBtn}>
        <TouchableOpacity style={styles.btn} onPress={showMap}>
          <Text style={{ fontFamily: "mon-sb", color: "#fff" }}>Map</Text>
          <Ionicons name="map" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 16,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    gap: 10,
  },
  sheetContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 10,
  },
});

export default ListingsBottomSheet;
