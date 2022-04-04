import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import RestaurantCard from "../cards/RestaurantCard";

function RestaurantGrid(){

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Restaurant Name', width: 300 },
    { field: 'address', headerName: 'Address', width: 600 }
  ]



    return(
        <>
        <div style={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={< RestaurantCard />}
            columns={columns}
            pageSize={12}
          />
        </div>
        </>
    )
}

export default RestaurantGrid;