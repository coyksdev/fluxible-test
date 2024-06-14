import { createStore } from 'fluxible-js';
import { createFluxibleHook } from 'react-fluxible';

const initialStore = {
  token: null,
  isLoggedIn: false,
};

const globalStore = createStore({
  initialStore,
});

const useGlobalStore = createFluxibleHook(globalStore);

export default function App() {
  const { token, isLoggedIn } = useGlobalStore((store) => {
    return {
      token: store.token,
      isLoggedIn: store.isLoggedIn,
    };
  });

  return <View>Hello world</View>;
}
