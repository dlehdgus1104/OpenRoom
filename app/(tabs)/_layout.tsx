import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import { Entypo } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
          headerRight: () => (
            <Link href="/Notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="rooms"
        options={{
          title: "Rooms",
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
          headerRight: () => (
            <Link href="/Notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="challenge"
        options={{
          title: "Challenge",
          tabBarIcon: ({ color }) => (
            <Entypo
              name="medal"
              style={{ marginBottom: -3 }}
              size={28}
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/Notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
