import React from "react";
import { TagContents } from "../../components";

export default function HastagsTrending() {
  return (
    <div className="flex flex-col w-64">
      <div>
        <p className="font-mono font-semibold text-xl">Trending</p>
      </div>
      <div className="flex flex-row flex-wrap">
        <div>
          <TagContents />
        </div>
        <div>
          <TagContents />
        </div>
        <div>
          <TagContents />
        </div>
        <div>
          <TagContents />
        </div>
        <div>
          <TagContents />
        </div>
        <div>
          <TagContents />
        </div>
      </div>
    </div>
  );
}
