import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export function useFilter(){
    return useContext(FilterContext)
}