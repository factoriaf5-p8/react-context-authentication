import { useState,useEffect } from "react"

export const useLocalStorage = (keyName:string, defaultValue: string) => {
    const [storedValue, setStoredValue] = useState(() => {
        const value = localStorage.getItem(keyName)
        try {
            if (value){
                return JSON.parse(value)
            }

        } catch (error) {
            return defaultValue;
        }
    });
    const setValue = (newValue:string) => {
        try {
                localStorage.setItem(keyName, JSON.stringify(newValue));

        } catch (error) {
            console.log(error);
        }
        setStoredValue(newValue);
    };

    useEffect(() => {
        const listenStorageChange = () => {
          setStoredValue(() => {
            const value = localStorage.getItem(keyName);
            if (value !== null) {
              return JSON.parse(value);
            }

            localStorage.setItem(keyName, JSON.stringify(defaultValue));
            dispatchEvent(new Event("storage"));
            return defaultValue;
          });
        };
            addEventListener("storage", listenStorageChange);
        return () => removeEventListener("storage", listenStorageChange);
      }, []);

    return [storedValue,setValue];
}