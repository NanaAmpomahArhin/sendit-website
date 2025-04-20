import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="w-full ">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center max-w-[1200px] min-h-[220px] border-[0.95px] border-dashed border-[#DCE0E4] rounded-[9.74px] cursor-pointer hover:border-[#17A448] transition"
      >
        <div className="w-[32px] h-[32px]">
          <img
            src="/assets/icons/humbleicons_upload.png"
            className="w-[32px] h-[32px]"
          />
        </div>
        <p className="text-[#7B7B7B] font-mono font-light text-[22.72px] mb-2">
          Drag and drop your file
        </p>
        <span className="bg-gray-100 border border-[#DCE0E4]  px-4 py-2 text-sm text-[#454545] font-mono text-[22.72px] ">
          Browse File
        </span>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {file && (
        <p className="mt-4 text-sm text-green-600">
          Selected File: <span className="font-semibold">{file.name}</span>
        </p>
      )}
    </div>
  );
};

export default FileUpload;
