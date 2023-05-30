import React from "react";
import MainLayout from "@/layouts/main-layout";
import Card from "../components/otc-trade-guide-card";

export default function OtcTradeGuide() {
  const cardObjects = [
    {
      title: "Step 1",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
    {
      title: "Step 2",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
    {
      title: "Step 3",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
    {
      title: "Step 4",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
    {
      title: "Step 5",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
    {
      title: "Step 6",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },

    // Add more objects as needed
  ];

  return (
    <MainLayout>
      <div>
        {cardObjects.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
        <div className=" bg-neutral-700 h-3 w-full "></div>
      </div>
    </MainLayout>
  );
}

// {cardObject.map((card,index)=>{
//   <Card key={index} cardData={card}
// })}
