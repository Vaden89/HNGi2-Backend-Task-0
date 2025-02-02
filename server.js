import express from "express";
const port = 3000;
const app = express(express.json());

app.get("/info", (req, res) => {
  const date = new Date();
  res.status(200).json({
    message: "Success",
    data: {
      email: "isaacshosanya89@gmail.com",
      current_datetime: date.toISOString(),
      github_url: "https://github.com/Vaden89/HNGi2-Backend-Task-0.git",
    },
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
