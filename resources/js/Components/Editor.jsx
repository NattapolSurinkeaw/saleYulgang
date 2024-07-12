import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CustomEditor from 'path/to/your/custom-build/ckeditor';

export default function Editor({ value, onChange }) {
  return (
    <CKEditor
        className="p-10"
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        config={{
          toolbar: [
            'heading', '|',
            'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
            'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
            'undo', 'redo'
          ],
          table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
          }
        }}
    />
  );
}
