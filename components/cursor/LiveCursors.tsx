import { LiveCursorProps } from "@/types/type";
import React from "react";

const LiveCursors = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (presence == null || !presence?.cursor) {
      return null;
    } else {
      return cursor;
    }
  });
};

export default LiveCursors;
