import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import mv from 'mv';

export const config = {
  api: {
    bodyParser: false,
  },
};

const download = async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      let oldPath = files.file.filepath;
      let newPath = `./public/uploads/${files.file.originalFilename}`;
      mv(oldPath, newPath, function (err) {});
      res.status(200).json({ fields, files });
    });
  });
};

export default download;
