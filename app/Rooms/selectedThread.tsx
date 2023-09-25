import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import ThumbsUp from "../../assets/images/thumbs-up-icon.svg";
import Comments from "../../assets/images/comments-icon.svg";
import IndianWoman from "../../assets/images/image24.svg";
import ThreeDots from "../../assets/images/three-dots.svg";
import RightArrow from "../../assets/images/right-arrow.svg";

export default function QuestionBoardScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
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
        <View style={styles.comment}>
          <Text>1 Comment</Text>
          <View style={styles.commentItems}>
            <View style={styles.commentItem}>
              <View style={styles.commentItemHeader}>
                <IndianWoman />
                <View style={styles.commentItemHeaderNameAndJoinedDate}>
                  <Text style={styles.commentItemHeaderName}>M. Barham</Text>
                  <Text style={styles.commentItemHeaderJoinedDate}>
                    Mar 15,2022, 12: 30pm
                  </Text>
                </View>
                <ThreeDots />
              </View>
              <View style={styles.commentItemDescription}>
                <Text style={styles.commentItemDescriptionText}>
                  I mean there are only one way to actually say I love you in
                  french but Im pretty sure there are other slangs that native
                  say
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.inputCotainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your comment..."
          ></TextInput>
          <View style={styles.inputClick}>
            <RightArrow />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// width*(/390)
// height*(/844)
// :{},

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  inputCotainer: {
    flexDirection: "row",
    height: height * (48 / 844),
    paddingHorizontal: width * (24 / 390),
    paddingVertical: height * (5 / 844),
    borderRadius: 88,
    backgroundColor: "#F6F6FA",
    marginTop: height * (36 / 844),
    gap: width * (8 / 390),
    alignItems: "center",
  },
  inputClick: {
    width: width * (28 / 390),
    height: height * (28 / 844),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    backgroundColor: "#4A27D5",
  },
  input: {
    flex: 1,
  },
  commentItemDescriptionText: {
    color: "#5D5A6D",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: height * (18.2 / 844),
  },
  commentItemHeaderName: {
    color: "#1E1E25",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: height * (14.4 / 844),
  },
  commentItemHeaderJoinedDate: {
    color: "#B8BDCC",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: height * (14.4 / 844),
  },
  commentItemHeaderNameAndJoinedDate: {
    gap: height * (2 / 844),
    flex: 1,
  },
  commentItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * (8 / 390),
  },
  commentItemDescription: {},
  commentItem: {
    gap: height * (8 / 844),
  },
  commentItems: {
    gap: height * (32 / 844),
  },
  comment: {
    paddingVertical: height * (19 / 844),
    paddingHorizontal: width * (24 / 390),
    gap: height * (18 / 844),
    borderRadius: 16,
    backgroundColor: "#F6F6FA",
    marginTop: height * (20 / 844),
  },
  container: {
    paddingTop: height * (5 / 844),
    paddingHorizontal: width * (24 / 390),
    paddingBottom: height * (48 / 844),
  },
  content: {
    marginTop: height * (6 / 844),
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
