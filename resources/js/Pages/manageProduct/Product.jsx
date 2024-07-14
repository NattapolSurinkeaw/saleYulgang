import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import DataGridMock from '@/Components/datagrid/DataGridMock'
import { useState, useEffect } from 'react';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import { svGetCateAll, svGetProductall, svDeleteProduct } from '@/services/product/product.service';

export default function Product({auth}) {
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', 
      headerName: 'Description', 
      width: 300,
      renderCell: (params) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: params.formattedValue }} />
        )
      } 
    },
    { field: 'price', headerName: 'Price', width: 100 },
    { field: 'priority', headerName: 'Priority', width: 70 },
    { 
      field: 'images', 
      headerName: 'Image', 
      width: 200,
      renderCell: (params) => {
        const firstImage = params.formattedValue.split(',')[0];
        return (
          <img className="w-40 " src={`/${firstImage}`} alt="Preview" />
        );
      }
    },
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 200,
      renderCell: (params) => (
        <>
          <div className="flex gap-2">
            <button className="bg-yellow-600 text-white py-1 px-2" onClick={() => handleEdit(params.row.id)}>
              แก้ไข
            </button>
            <button className="bg-red-600 text-white py-1 px-4" onClick={() => deleteProduct(params.row.id)}>
              ลบ
            </button>
          </div>
        </>
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
      setCateProduct(res.data.data)
    })
  }, [])

  useEffect(() => {
    console.log(products)
  }, []);
  
  const handleEdit = (id) => {
    setOpenEdit(true)
    setSlcProduct(id)
  };

  const deleteProduct = (id) => {
    svDeleteProduct(id).then((res) => {
      if(res.data.status == 'success') {
        setProdcut(prevProduct => prevProduct.filter(product => product.id !== id));
      }
      console.log(res)
    })
  }

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
          <CreateProduct open={openCreate} handleClose={handleCloseCreate} cateProduct={cateProduct} setProdcut={setProdcut} />
        )
      }

      {
        openEdit && (
          <EditProduct open={openEdit} handleClose={handleCloseEdit} id={slcProduct} cateProduct={cateProduct} setProdcut={setProdcut} />
        )
      }
    </MainLayout>
  )
}
