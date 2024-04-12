//The newsEvent object continuously emits three different events:
//newsEvent, breakingNews and error

//Attach event listeners for each event and log out their data.

import { EventEmitter } from "node:events";

function createNewsFeed() {
  const emitter = new EventEmitter();

  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();

newsFeed.on("newsEvent", (news) => {
    console.log(news);
  });

newsFeed.on("breakingNews", (news) => {
    console.log(news);
  });

newsFeed.on("error", (err) => {
    console.error("Error:", err.message);
  });


//object entries:
//   const eventHandlers = {
//     newsEvent: (data) => console.log(data),
//     breakingNews: (data) => console.log(data),
//     error: (error) => console.error("Error:", error.message),
//   };

//   Object.entries(eventHandlers).forEach(([eventName, handler]) => {
//     newsFeed.on(eventName, handler);
//   });
