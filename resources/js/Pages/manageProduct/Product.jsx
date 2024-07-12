import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import DataGridMock from '@/Components/datagrid/DataGridMock'
import { useState } from 'react';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

export default function Product({auth}) {
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 200,
      renderCell: (params) => (
        <button className="bg-yellow-500 p-1" onClick={() => handleEdit(params.row.id)}>
          แก้ไข
        </button>
      )
    },
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
    { id: 14, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 15, name: 'Jane Smith', email: 'jane@example.com'},
    { id: 16, name: 'Jane Smith', email: 'jane@example.com'},
  ];

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [slcProduct, setSlcProduct] = useState(null);
  const handleCloseCreate = () => setOpenCreate(false);
  const handleCloseEdit = () => setOpenEdit(false);
  
  const handleEdit = (id) => {
    setOpenEdit(true)
    setSlcProduct(id)
    // alert(`แก้ไข item id: ${id}`);
  };

  return (
    <MainLayout auth={auth}>
      <div className="mb-4 flex justify-between">
        <h1>Product</h1>
        <button 
          className="bg-blue-500 text-white p-1"
          onClick={() => setOpenCreate(true)}
        >create Product</button>
      </div>
      <div>
        <DataGridMock columns={columns} rows={rows} />
      </div>

      {
        openCreate && (
          <CreateProduct open={openCreate} handleClose={handleCloseCreate}  />
        )
      }

      {
        openEdit && (
          <EditProduct open={openEdit} handleClose={handleCloseEdit} id={slcProduct} />
        )
      }
    </MainLayout>
  )
}
