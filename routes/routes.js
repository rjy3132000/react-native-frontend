import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/login";
import CRUD from "../Screens/CRUD";

function MyStacK () {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CRUD" component={CRUD} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStacK