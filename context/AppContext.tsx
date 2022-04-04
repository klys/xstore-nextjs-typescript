import { createContext, useContext } from 'react';

export type GlobalContent = {
  products: any[]
  setProducts:(c: any) => void
}

export const AppContext = createContext<GlobalContent>({
  products: [],
  setProducts: () => {}
});

export function useAppContext() {
  return useContext(AppContext);
}
