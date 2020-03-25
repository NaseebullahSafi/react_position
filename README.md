# Mars Rover (The Wedding Shop)
![Homepage](https://raw.githubusercontent.com/NaseebullahSafi/react_position/master/src/assets/img/homepage.PNG)
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular,
must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to
send back to Earth.

A rover's position and location are represented by a combination of x and y co-ordinates and a letter representing one of
the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might
be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes
the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one
grid point and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).
Write a simple application that takes a user’s starting point, and then directional instructions and displays the resulting
position to the user.

## Design Process

### Step 1
At first I started to brainstorm the key components within the problem, i.e. rovers and mars (board, if you will). 
1. The plateau is a simple (x, y) board with an initial dimension set to (5, 5) or (6, 6) starting from 0th index.
2. The rover (robot) is a 1 unit object located at the origin of the board (0, 0)/bottom left.

### Step 2
I set out for design inspiration using my favourite site, [Dribbble](https://dribbble.com/).

### Step 3
After deciding on few designs, I like to follow atomic design and set out to structure the frontend by leverageing atoms, molecules, and organisms.

### Step 4
Amongst many react pattern, I decided to use functional components instead of class based and making use of React hooks.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
