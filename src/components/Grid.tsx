import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { format } from "date-fns";
import { useState } from "react";
import data from "../near-earth-asteroids.json";
import "../styles/index.css";
import columnDefs from "../utils";


const NeoGrid = (): JSX.Element => {
  const [columns, setColumns] = useState(() => columnDefs);

  const transformedData = data.map((v) => {
    const discovery_date = format(new Date(v.discovery_date), "dd/MM/yyyy");
    const pha = !!v.pha.length ? (v.pha === "Y" ? "Yes" : "No") : "";
    return {
      ...v,
      discovery_date,
      pha,
    };
  });

  function updateClipboard(newClip: any) {
    navigator.clipboard.writeText(JSON.stringify(Object.values(newClip))).then(
      () => {
        console.log("copied");
      },
      (err) => {
        throw err;
      }
    );
  }

  const onClearFilters = () => {
    const copyCols = [...columns].map((v) => ({
      ...v,
      sort: null,
    }));

    setColumns(() => copyCols);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <div className="header-container">
        <h1 className="title">Near-Earth Object Overview</h1>
        <button className="ml-15" onClick={() => onClearFilters()}>
          Clear filters
        </button>
      </div>
      <AgGridReact
        rowData={transformedData}
        columnDefs={columns}
        rowGroupPanelShow={"always"}
        rowSelection={"single"}
        onCellDoubleClicked={(v) => updateClipboard(v.node.data)}
      />
    </div>
  );
};

export default NeoGrid;
