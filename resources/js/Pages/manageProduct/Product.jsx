import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import DataGridMock from '@/Components/datagrid/DataGridMock'
import { useState, useEffect } from 'react';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import { svGetCateAll, svGetProductall } from '@/services/product/product.service';

export default function Product({auth}) {
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'description', headerName: 'Description', width: 300 },
    { 
      field: 'images', 
      headerName: 'Image', 
      width: 200,
      renderCell: (params) => {
        const firstImage = params.formattedValue.split(',')[0];
        return (
          <img className="w-40 h-20" src={firstImage} alt="Preview" />
        );
      }
    },
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

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [slcProduct, setSlcProduct] = useState(null);
  const [products, setProdcut] = useState([]);
  const [cateProduct, setCateProduct] = useState([]);

  const handleCloseCreate = () => setOpenCreate(false);
  const handleCloseEdit = () => setOpenEdit(false);

  useEffect(() => {
    svGetProductall().then((res) => {
      setProdcut(res.data.data)
    })
    svGetCateAll().then((res) => {
      console.log(res)
      setCateProduct(res.data.data)
    })
  }, [])
  
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
        <DataGridMock columns={columns} rows={products} />
      </div>

      {
        openCreate && (
          <CreateProduct open={openCreate} handleClose={handleCloseCreate}  cateProduct={cateProduct} />
        )
      }

      {
        openEdit && (
          <EditProduct open={openEdit} handleClose={handleCloseEdit} id={slcProduct} cateProduct={cateProduct} />
        )
      }
    </MainLayout>
  )
}
