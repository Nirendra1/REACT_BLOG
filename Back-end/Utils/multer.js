

const PATH = "../public/images";
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, PATH));
    },
    filename: (req, file, cb) => {
      const fileName = Date.now() + path.extname(file.originalname);
      req.body.imageUrl = fileName;
      cb(null, fileName);
    },
  });
 
  const upload = multer({
    storage: storage,
  });
 
  const mongoose = require('mongoose')
const Schema = mongoose.Schema

const masterRole = new Schema({
    roles: {
        type: String,
        require: true
    }
}, { timestamps: true })

const MasterRoles = mongoose.model('masterroles', masterRole)
const default_records = [
    { roles: 'Admin' },
    { roles: 'Management' },
    { roles: 'PCs / Support' },
    { roles: 'QCs / Support' },
    { roles: 'Sales, Cabinetry' },
    { roles: 'Sales, Tops' },
    { roles: 'WH/Field, Cabinetry' },
    { roles: 'WH/Field, Tops' },
    { roles: 'Contractor' },
];

(async() => {
    try {
        const data = await MasterRoles.find({});
        if (!data.length) {
            await MasterRoles.insertMany(default_records);
        }

    } catch (err) {
        console.log(err)
    }

})();

module.exports = MasterRoles




