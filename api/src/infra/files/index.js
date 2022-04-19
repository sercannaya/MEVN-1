const multer = require('multer')
const upload =  multer({ dest: '../../../public/data/' }).single('file')

export default {
    upload
}