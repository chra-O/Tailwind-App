import React from "react";
import Detail from "./Detail";

export default function DetailComponent() {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="pl-10 pr-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="pr-40 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
          </tr>
        </thead>
      </table>

      <Detail />
      <Detail />
      <Detail />
      <Detail />
    </div>
  );
}
