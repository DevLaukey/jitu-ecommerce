const amqplib = require("amqplib/callback_api");

const express = require("express");

const app = express();

app.use(express.json());

// port
const PORT = process.env.PORT || 3011;

// connect to rabbitmq

const ampServer = "amqp://localhost:5672";

// make sure the channel is created

app.post("/auth", async (req, res) => {
  let { username, password } = req.body;
  try {
    amqplib.connect(ampServer, function (err, connection) {
      if (err) {
        console.log(err);
      }
      connection.createChannel(async function (err, channel) {
        if (err) {
          console.log(err);
        }
        channel.assertQueue("auth-queue");

        const response = channel.sendToQueue(
          "auth-queue",
          Buffer.from(JSON.stringify({ username, password }))
        );
        console.log(response, "csd");
        res.send(response);
      });
    });
  } catch (e) {
    console.log(e);
  }
});

// consume from rabbitmq
app.get("/", (req, res) => {
  try {
    amqplib.connect(ampServer, function (err, connection) {
      if (err) {
        console.log("err");
      }
      connection.createChannel(async function (err, channel) {
        if (err) {
          console.log(err);
        }
        channel.consume("auth-queue", (data) => {
          // console.log(data.content.toJSON());
          res.send( data.content);
        });
      });
    });
  } catch (e) {
    console.log("e", e);
  }
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
