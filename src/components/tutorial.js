const { WebClient } = require("@slack/web-api");
console.log("Getting started with Node Slack SDK");
const web = new WebClient(
  "xoxb-934873283057-1115504716422-JaiJi84vGaNAMpqpeRmOmXI5"
);

const SlackInt = ({ name, phone, email, message }) => {
  try {
    // Use the `chat.postMessage` method to send a message from this app
    return web.chat.postMessage({
      channel: "#contact",
      text: `Name: ${name} \n Email: ${email} \n phone: ${
        phone ? phone : "No Phone Number Attached"
      } \n Message: ${message ? message : "No Message Attached"}`,
    });
  } catch (error) {
    console.log(error);
  }

  console.log("Message posted!");
};

export default SlackInt;
