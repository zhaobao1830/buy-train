import React, { useCallback } from 'react';
import Header from "../common/Header";
import Journey from "./Journey";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Submit from "./Submit";

export default function Home() {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div>
      <Header title="火车票" onBack={onBack}/>
      <Journey/>
      <DepartDate/>
      <HighSpeed/>
      <Submit/>
    </div>
  )
}