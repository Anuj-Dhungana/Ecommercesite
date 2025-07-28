import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import constant from "./constant.js";


cloudinary.config({
  cloud_name: constant.CLOUDINARY_CLOUD_NAME,
  api_key: constant.CLOUDINARY_API_KEY,
  api_secret: constant.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images",
  },
});

const uploads = multer({ storage: storage });

export { uploads, cloudinary };
