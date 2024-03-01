import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../components/AddTask';

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

type GlobalContextType = {
    currentTask: Task | null;
    setCurrentTask: React.Dispatch<React.SetStateAction<Task | null>>;
};

export const useGlobalState = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalProvider');
    }
    return context;
};

type GlobalProviderProps = {
    children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [currentTask, setCurrentTask] = useState<Task | null>(null);

    return (
        <GlobalContext.Provider value={{ currentTask, setCurrentTask }}>
            {children}
        </GlobalContext.Provider>
    );
};