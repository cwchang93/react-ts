import React from "react";
import Group from "./Group";

interface I_f2eGroup {
  id: number;
  team: string;
}

interface I_Props {
  add?: () => void;
}

class GroupList extends React.Component<I_Props> {
  render() {
    const f2eGroup: I_f2eGroup[] = [
      { id: 1, team: "欣傳媒" },
      { id: 2, team: "共通組" },
      { id: 3, team: "活動組" },
      { id: 4, team: "站長平台" }
    ];

    return f2eGroup.map((ele: I_f2eGroup) => {
      return <Group name={ele.team} />;
    });
  }
}

export default GroupList;
