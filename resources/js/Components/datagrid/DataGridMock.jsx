import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';


export default function DataGridMock() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    // เพิ่มคอลัมน์เพิ่มเติมตามที่คุณต้องการ
  ];
  
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 4, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 5, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 6, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 7, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 8, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 9, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 10, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 11, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 12, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 13, name: 'Jane Smith', email: 'jane@example.com' },
    // เพิ่มแถวข้อมูลเพิ่มเติมตามที่คุณต้องการ
  ];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
