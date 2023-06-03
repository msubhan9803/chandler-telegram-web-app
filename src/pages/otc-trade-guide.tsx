import React from "react";
import MainLayout from "@/layouts/main-layout";
import OtcTradeGuideCard from "@/components/otc-trade-guide-card";

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
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra.",
    },
    {
      title: "Step 4",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
    {
      title: "Step 5",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
    {
      title: "Step 6",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue quis mi luctus convallis. Integer accumsan porta justo eget tincidunt. Sed nec sollicitudin sapien, eget tincidunt dolor. Sed bibendum dignissim ligula. Mauris ac augue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis commodo maximus diam sit amet hendrerit. Donec eget semper orci, id feugiat orci. Suspendisse at maximus lectus. Phasellus vitae porttitor est. Proin fringilla non ex ac viverra. ",
    },
  ];

  return (
    <MainLayout>
      <div className="grid grid-row-1 md:grid-row-1 md:mx-24 lg:grid-row-3 lg:mx-28 xl:grid-row-4 xl:mx-40 gap-8 p-4">
        {cardObjects.map((card, index) => (
          <OtcTradeGuideCard key={index} cardData={card} />
        ))}
      </div>
    </MainLayout>
  );
}
