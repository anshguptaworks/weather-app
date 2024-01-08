import React from "react";
import SearchIcon from "./search";
import CloudIcon from "./cloud";

export const getIcons = (iconName, className, pathClassName) => {
  switch (iconName) {
    case "search":
      return <SearchIcon pathClassName={pathClassName} className={className} />;
    case "cloud":
      return <CloudIcon pathClassName={pathClassName} className={className} />;
    default:
      throw new Error("Icon not found");
  }
};
