import React from "react";

const HelloTodayContext = React.createContext();

export const HelloTodayProvider = HelloTodayContext.Provider;
export const HelloTodayConsumer = HelloTodayContext.Consumer;

export default HelloTodayContext;
