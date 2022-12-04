import React, {useState, createContext, useContext, FC} from 'react';

const UIContext = createContext<{[key: string]: any}>({
  uiState: "default"
})


export const UIProvider: FC = ({children}) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const uiState = {
    isSideBarOpen,
    setSideBarOpen
  }


  return (
    <UIContext.Provider value={uiState}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}
