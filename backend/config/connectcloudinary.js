import {v2 as cloudinary} from 'cloudinary';
import { config } from 'dotenv'

config();

const { CLOUD_NAME, API_KEY, API_SECRET} = process.env;

const connCloudinary = cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: API_KEY, 
  api_secret: API_SECRET
});

export default connCloudinary;