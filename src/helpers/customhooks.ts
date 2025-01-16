import { useContext } from "react";
import { LoaderContext } from "../components/LoaderProvider";

export const useLoader = ()=>{
    const context = useContext(LoaderContext);
      if (!context) {
        throw new Error("useLoader must be used within a LoaderProviderContext");
      }
      return context;
  }