import { StackNavigator } from "react-navigation";

import Welcome from '../screen/Welcome';
import Hello from '../screen/Hello';

const AuthNavigator = StackNavigator(
    {
        Welcome: {
            path: "/welcome",
            screen: Welcome,
            navigationOptions: {
                title: "Welcome Food",
                header: null
            }
        },
        Hello: {
            path: "/hello",
            screen: Hello,
            navigationOptions: {
                title: "Hello Qieya",
                //header: null
            }
        }
    },
    {
        initialRouteName: "Welcome"
    }
);

export default AuthNavigator;