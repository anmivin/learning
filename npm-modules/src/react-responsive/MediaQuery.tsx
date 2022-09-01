import React from "react";
import { useMediaQuery } from "./useMediaQuery";

interface mediaQueryProps {
  orientation?: "portrait" | "landscape";
  minResolution?: `${number}dppx` | number;
  maxResolution?: `${number}dppx` | number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  children?: React.ReactNode | ((matches: boolean) => React.ReactNode);
}

const MediaQuery = ({ children, ...props }: mediaQueryProps) => {
  const getSize = (key: string, value: number | string) => {
    switch (key) {
      case "orientation":
        return `(orientation: ${value})`;
      case "minWidth":
        return `(min-width: ${value}px)`;
      case "maxWidth":
        return `(max-width: ${value}px)`;
      case "minHeight":
        return `(min-height: ${value}px)`;
      case "maxHeight":
        return `(max-height: ${value}px)`;
      case "minResolution":
        return `(min-resolution: ${
          typeof value === "number" ? value + "dppx" : value
        })`;
      case "maxResolution":
        return `(max-resolution: ${
          typeof value === "number" ? value + "dppx" : value
        })`;
      default:
        return "";
    }
  };

  const line = Object.entries(props)
    .map(([key, value]) => `${getSize(key, value)}`)
    .join("; ");
  const query = useMediaQuery({ query: line });

  return typeof children === "function" ? (
    <>{children(query)}</>
  ) : query ? (
    <>{children}</>
  ) : null;
};

export default MediaQuery;
