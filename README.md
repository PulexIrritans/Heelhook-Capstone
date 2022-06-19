# Heelhook

Capstone project - Web Development Bootcamp @[neuefische](https://www.neuefische.de/weiterbildung/web-development)

## Description
![Slide 16_9 - 1](https://user-images.githubusercontent.com/94105745/169652505-251cf0af-d834-4eb2-bf28-af97928463cc.jpg)



### An app for boulder sport enthusiasts

Heelhook is the boulder buddy that you waited for. It shows you all boulder routes available in your boulder club. Search and select a route to explore its details. Track your climbs, provide feedback. And see valuable insights about your achievements displayed in easy to understand graphical charts. Watch yourself grow as a climber and compare yourself with other climbers if you like.

### Demo

Have a look at the hosted version on Vercel: [Heelhook Demo](https://heelhook.vercel.app/)

Important: This demo is optimized for mobile screen!

### Tech Stack

#### MERN:

- React (React Router, React Hooks, React Testing Library)
- Node.js
- mongoose
- Express
- MongoDB Atlas

#### Plus:

- Styled Components
- Storybook
- ant design charts
- Jest
- Vercel
- Heroku

### Project Setup

- Clone this respository
- perform $ npm run install:all (Installs all dependencies for the root project, the client project and the server project.)
- Set up an .env with the variable "MONGODB_URL" in the server folder with the address to your local mongodb, e.g.: MONGODB_URL="mongodb://localhost:27017/heelhook"
- Insert some test boulders to mongodb (heelhook) in a collection named "boulders". There is a boulders.json in the project which you can use for this purpose. Please use only such boulders in the json that DON'T have an id property. The boulders with ID are not ready to be used yet as no pictures have been uploaded to the project for those.
- Set up an .env with the variable "REACT_APP_URL" in the client folder with the the following content: "REACT_APP_URL=/api"
- Run the app in development mode via $ npm run dev
- Open [http://localhost:3000](http://localhost:3000/) to view it in your browser
- Run tests from the client folder with $ npm run test
- Run storybook from the client folder with $ npm run storybook
