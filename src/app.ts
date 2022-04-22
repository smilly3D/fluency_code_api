import express, { NextFunction, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import "dotenv/config";

import "./database";

const app = express();

app.use(express.json());

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: async (req, file, cb) => {
//     // Cria um código randômico que será o nome do arquivo
//     const novoNomeArquivo = "felipes";

//     // Indica o novo nome do arquivo:
//     cb(null, `${novoNomeArquivo}.jpg`);

//     return `${novoNomeArquivo}.jpg`;
//   },
// });

// const upload = multer({ storage });

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

// app.post("/upload", upload.single("file"), async (req, res) => {
//   const fileContent = await fs.promises.readFile(`uploads/felipes.jpg`);

//   const ContentType = mime.getType(`uploads/felipes.jpg`);

//   await client
//     .putObject({
//       Bucket: `${process.env.AWS_BUCKET}/avatar`,
//       Key: "felipesssss.jpg",
//       ACL: "public-read",
//       Body: fileContent,
//       ContentType,
//     })
//     .promise();

//   await fs.promises.unlink("uploads/felipes.jpg");

//   return res.send(
//     "https://fluency-code.s3.sa-east-1.amazonaws.com/avatar/felipes.jpg"
//   );
// });

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
