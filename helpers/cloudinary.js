const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({ 
    cloud_name: 'dnmmea8y4', 
    api_key: '389939583931584', 
    api_secret: 'i516yWpKyTVaGmyXY2Iles7zAEs' 
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'
    })
    return result;
}

const upload = multer({ storage });

module.exports = {
    upload,
    imageUploadUtil
}
