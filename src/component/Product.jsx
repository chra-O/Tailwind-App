import React from "react";
import Card from "./Card";

export default function Product() {
  return (
    <>
      <div className="flex grid grid-cols-4  ">
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </div>
    </>
  );
}
