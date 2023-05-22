import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from '@expo/vector-icons';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import LogOutBtn from "../components/LogOutBtn";
import CreatePostsScreen from './CreatePostsScreen';

export default function Home() {

    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator initialRouteName="PostsScreen" screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "ProfileScreen") iconName = "person";
                else if (route.name === "PostsScreen") iconName = "photograph";
                else if (route.name === "CreatePostsScreen") iconName = "plus-a";
                return <Fontisto name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#e4dfda",
            tabBarActiveBackgroundColor: "#FF6C00",
            tabBarShowLabel: false,
            tabBarItemStyle: {
                borderRadius: 20,
                marginVertical: 5,
                marginHorizontal: 25,
            }
        })}
        >
            <Screen name="CreatePostsScreen" component={CreatePostsScreen} />
            <Screen name="PostsScreen" component={PostsScreen} options={{ headerRight: LogOutBtn }} />
            <Screen name="ProfileScreen" component={ProfileScreen} />

        </Navigator>
    )
}

