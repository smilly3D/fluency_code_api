import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload() {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "..", "uploads/"),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const newFileoriginal = file.originalname.replace(/ /g, "_");
          const fileName = `${fileHash}-${newFileoriginal}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
