"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e4723492-ebdb-4b66-8316-031880bb10f4");
  }, []);

  return null;
};
