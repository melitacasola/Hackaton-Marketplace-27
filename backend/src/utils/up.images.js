const uploadImages = async (path)=>{
    const images = await cloudinary.v2.uploader.upload(path)
    return images
}

export default uploadImages;