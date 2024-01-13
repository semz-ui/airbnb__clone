import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";

import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingData from "@/assets/data/airbnb-listings.json";
import listingDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

const Page = () => {
  const [category, setCategory] = useState("Tiny Homes");
  const items = useMemo(() => listingData as any, []);
  const geoItems = useMemo(() => listingDataGeo as any, []);
  const onDataChnaged = (category: string) => {
    console.log("Changed", category);
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCatergoryChanged={onDataChnaged} />,
        }}
      />
      <ListingsMap listings={listingDataGeo} />
      <ListingsBottomSheet listings={items} catergory={category} />
    </View>
  );
};

export default Page;
