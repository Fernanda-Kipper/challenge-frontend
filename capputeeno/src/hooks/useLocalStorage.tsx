import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    // TRATATIVA PARA QUEM RECEBE ERRO LOCALSTORAGE IS NOT DEFINED
    useEffect(() => {
        if (typeof window === 'undefined') return;
        setValue(JSON.parse(localStorage.getItem(item) ?? ''))
    }, [window])

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}