import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';


export default function DataGridMock({columns, rows}) {
  
  return (
    <Box sx={{ height: '700px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  )
}
