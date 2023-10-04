import dynamic from "next/dynamic";
import React from "react";

const CompetitorInfo = dynamic(() => import("./competitor-info"), {
  ssr: false,
});

const COMPETITORS = [
  {
    id: 1,
    name: "رؤوف الشامي",
    imageURL: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
    time: "13:59:00",
    vote: "20+",
  },
  {
    id: 2,
    name: "سليم منصور",
    imageURL: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    time: "13:59:00",
    vote: "20+",
  },
  {
    id: 3,
    name: "محمود مرعي",
    imageURL: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    time: "13:59:00",
    vote: "20+",
  },
  {
    id: 4,
    name: "ادهم حاجي",
    imageURL: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    time: "13:59:00",
    vote: "20+",
  },
  {
    id: 5,
    name: "راكان غانم",
    imageURL: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
    time: "13:59:00",
    vote: "20+",
  },
];
const Competitors = () => {
  return (
    <aside className="shadow-md rounded-lg py-6 px-5  space-y-4">
      <h2 className="font-bold text-3xl">المتنافسون</h2>
      <ul className="space-y-4">
        {COMPETITORS.map((competitor) => (
          <CompetitorInfo
            key={competitor.id}
            imageURL={competitor.imageURL}
            name={competitor.name}
            time={competitor.time}
            vote={competitor.vote}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Competitors;
