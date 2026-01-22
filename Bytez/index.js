import express from "express";
import "dotenv/config";
import sdk from "./services/ai.js";
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    // choose stable-diffusion-xl-base-1.0
    const model = sdk.model("stabilityai/stable-diffusion-xl-base-1.0");

    // send input to model
    const { error, output } = await model.run(prompt);

    res.status(200).json({ output, error });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server running on port:", port);
});

export default app;
