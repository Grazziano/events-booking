import React, { useRef } from 'react';
import { EventFormStepProps } from './General';
import { Button } from '@nextui-org/react';
import toast from 'react-hot-toast';

export default function Media({
  newlySelectedImages,
  setNewlySelectedImages,
}: EventFormStepProps) {
  const uploadFilesRef = useRef<HTMLInputElement>(null);

  const onFileSelect = (e: any) => {
    try {
      const files = e.target.files;
      const filesArray = Array.from(files);

      // set te newly selected images with urls
      const existingNewlySelectedImages = newlySelectedImages || [];
      const newImages = filesArray.map((file: any) => ({
        url: URL.createObjectURL(file),
        file,
      }));

      setNewlySelectedImages([...existingNewlySelectedImages, ...newImages]);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const onRemove = (index: number) => {
    const tempImages: any[] = [...newlySelectedImages];
    tempImages.splice(index, 1);
    setNewlySelectedImages(tempImages);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-max">
        <Button onClick={() => uploadFilesRef.current?.click()}>
          <input
            type="file"
            ref={uploadFilesRef}
            hidden
            onChange={onFileSelect}
          />
          Upload New Image
        </Button>
      </div>

      {/* Show the newly selected images */}
      <div className="flex gap-5">
        {newlySelectedImages?.map((image: any, index: number) => (
          <div className="border flex flex-col gap-5 rounded pb-5">
            <img
              key={index}
              src={image.url}
              alt="newly selected"
              className="w-40 h-40 object-cover"
            />
            <h1
              className="text-center cursor-pointer underline text-sm"
              onClick={() => onRemove(index)}
            >
              Remove
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
