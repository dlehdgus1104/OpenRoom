import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import SearchBar from "@/components/Explore/SearchBar";
import PinnedIcon from "../../assets/images/pinned-icon.svg";
import ThumbsUp from "../../assets/images/thumbs-up-icon.svg";
import Comments from "../../assets/images/comments-icon.svg";

export default function QuestionBoardScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Link href="Rooms/selectedThread" asChild>
        <Pressable>
          <View style={styles.content}>
            <View style={styles.status}>
              <PinnedIcon />
              <Text style={styles.statusText}>Popular question</Text>
            </View>
            <Text style={styles.header}>How do you say “I love you”</Text>
            <Text style={styles.description}>
              Is there any other way native people say “I love you” in france or
              paris? Is there any other way native people say “I love you” in
              france or paris? Is there any other way native people say “I love
              you” in france or paris?
            </Text>
            <Image
              source={require("../../assets/images/paris-image.jpeg")}
              style={styles.image}
            />
            <View style={styles.footer}>
              <View style={styles.footerFrame1}>
                <Image
                  source={require("../../assets/images/soccer-player-bw.png")}
                />
                <Text>Dilan W.</Text>
              </View>
              <View style={styles.footerFrame2}>
                <View style={styles.footerFrame2Sub}>
                  <ThumbsUp />
                  <Text>24</Text>
                </View>
                <View style={styles.footerFrame2Sub}>
                  <Comments />
                  <Text>5</Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

// width*(/390)
// height*(/844)

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingTop: height * (5 / 844),
    paddingHorizontal: width * (24 / 390),
  },
  content: {
    marginTop: height * (24 / 844),
    paddingHorizontal: width * (18 / 390),
    paddingVertical: height * (24 / 844),
    gap: height * (8 / 844),
    borderRadius: 16,
    backgroundColor: "#F6F6FA",
  },
  status: {
    gap: width * (8 / 390),
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: "#1E1E25",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: height * (14.4 / 844),
  },
  header: {
    color: "#1E1E25",
    fontSize: 19,
    fontWeight: "700",
    lineHeight: height * (22.8 / 844),
  },
  description: {
    color: "#1E1E25",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: height * (18.2 / 844),
  },
  image: {
    marginTop: height * (4 / 844),
    height: height * (126 / 844),
    width: width * (306 / 390),
    borderRadius: 8,
  },
  footer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  footerFrame1: {
    flexDirection: "row",
    gap: width * (8 / 390),
  },
  footerFrame2: {
    flexDirection: "row",
    gap: width * (11 / 390),
  },
  footerFrame2Sub: {
    flexDirection: "row",
    gap: width * (4 / 390),
  },
});
