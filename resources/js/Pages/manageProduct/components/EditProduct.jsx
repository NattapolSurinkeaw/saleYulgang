import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import { useState, useRef, useEffect } from 'react';
import { svGetProductId, svEditProduct } from '@/services/product/product.service';
import TextInput from '@/Components/TextInput';
import Editor from '@/Components/Editor';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

export default function EditProduct({open, handleClose, id, cateProduct, setProdcut}) {
  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);
  const [price, setPrice] = useState(0);
  const [statusDisplay, setStatusDisplay] = useState(true);

  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [ selectFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(images);
    setSelectedFiles(files); // เก็บไฟล์ใน state สำหรับ formData
  };

  useEffect(() => {
    svGetProductId(id).then((res) => {
      console.log(res.data.data)
      const resData = res.data.data
      setCategory(resData.cate_id)
      setTitle(resData.title)
      setContent(resData.description)
      setStatusDisplay(resData.status_display);
      setPrice(resData.price);
      setPriority(resData.priority);

      const splitImages = resData.images.split(',')
      const modifiedImages = splitImages.map(image => '/' + image)
      setSelectedImages(modifiedImages)
    })
  }, [])

  const submit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cate_id", category);
    formData.append("description", content);
    formData.append("price", price);
    formData.append("status_display", statusDisplay);
    formData.append("priority", priority);
    selectFiles.forEach((file, index) => {
      formData.append('images[]', file); // เพิ่มรูปภาพลงใน formData
    });
    
    formData.forEach((value, key) => {
      console.log(key, " : ", value);
    });

    svEditProduct(formData, id).then((res) => {
      console.log(res.data.status)
      if(res.data.status == 'success') {
        setProdcut((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, ...res.data.data } : product
          )
        );
        handleClose()
      }
    })
  }
  
  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex justify-between mb-4">
          <p>Edit Prodcut : {id}</p>
          <button className="text-[30px] leading-[10px]" onClick={handleClose}>x</button>
        </div>

        <div className="w-full h-[480px] overflow-auto border">
          <div className='p-3 flex max-lg:flex-col gap-4 '>
            <div className="w-full flex flex-col gap-4">
              <div className="p-4 border rounded-md flex gap-4">
                <div className="flex flex-wrap gap-4">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="w-[150px] h-[122px] border p-1">
                      <img
                        className="w-full h-full rounded-sm"
                        src={image}
                        alt={`preview-${index}`}
                      />
                    </div>
                  ))}
                  <div className="w-[150px] h-[122px] border p-1 hover:scale-[0.95] duration-300 cursor-pointer">
                    <label htmlFor="imageCate">
                      <img
                        className="w-full h-full rounded-sm"
                        src="/image/no-image.png"
                        alt="preview-image"
                      />
                    </label>
                    <input
                      id="imageCate"
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="">ลายละเอียด</label>
                <input 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Title" type="text" 
                />

                <Editor value={content} onChange={setContent} />

                <select name="" onChange={(e) => setCategory(e.target.value)} value={category} id="">
                  {
                    cateProduct.map(cate => (
                      <option key={cate.id} value={cate.id}>{cate.title}</option>
                    ))
                  }
                </select>
                
                <input 
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Description" type="text" 
                />
              </div>
              
              <div>
                <p className="mb-2">ตั้งหมวด category</p>
                <div className="flex gap-4">
                  <div className="w-24 p-1 border flex items-center flex-col gap-2">
                    <label htmlFor="">แสดงผล</label>
                    <Switch
                      checked={statusDisplay}
                      onChange={(e) => setStatusDisplay(e.target.checked)}
                      {...label}
                      defaultChecked={statusDisplay}
                    />
                  </div>

                  <div className="w-24 p-1 border flex items-center flex-col gap-2">
                    <label htmlFor="">priority</label>
                    <TextInput 
                      style={{width: '100%'}}
                      type="number" min="0"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button 
            className="bg-green-600 text-white p-2 rounded-md"
            onClick={submit}
          >บันทึก</button>
          <button 
            className="bg-red-500 text-white p-2 rounded-md"
            onClick={handleClose}
          >ยกเลิก</button>
        </div>
      </Box>
    </Modal>
    </>
  )
}
