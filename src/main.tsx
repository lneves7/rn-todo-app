import { registerRootComponent } from "expo";
import { TodoListContextProvider } from "./context";
import { MainScreen } from "./screens";

const RootComponent = () => (
  <TodoListContextProvider>
    <MainScreen />
  </TodoListContextProvider>
);

registerRootComponent(RootComponent);
