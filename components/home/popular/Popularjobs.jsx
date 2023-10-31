import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";

import { COLORS, SIZES } from "../../../constants";

import { PopularJobCard } from "../../common/cards/popular/PopularJobCard";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false
  const error = false;

  return (


    <View  style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        <TouchableOpacity>
          <Text style={{color:'blue'}}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>

{isLoading ? (
  <ActivityIndicator size="large" color={COLORS.primary}/>
):error ? (
  <Text>something wrong </Text>
):(
  <FlatList

  style={{}}
  />
)}
      </View>
    </View>
  );
};

export default Popularjobs;
