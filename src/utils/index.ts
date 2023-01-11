import { ColDef } from "ag-grid-community";

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", sortable: true },
  { field: "discovery_date", headerName: "Discovery Date", sortable: true },
  { field: "h_mag", headerName: "H (mag)", sortable: true },
  { field: "moid_au", headerName: "MOID (au)", sortable: true },
  { field: "q_au_1", headerName: "q (au)", sortable: true },
  { field: "q_au_2", headerName: "Q (au)", sortable: true },
  { field: "period_yr", headerName: "Period (yr)", sortable: true },
  { field: "i_deg", headerName: "Inclination (deg)", sortable: true },
  { field: "pha", headerName: "Potentially Hazardous", sortable: true },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    sortable: true,
  },
];

export default columnDefs;
