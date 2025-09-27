"use client";

import { useState, useEffect } from "react";
import Loader from "./componets/loader";


export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //  loading (1 sec)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}
