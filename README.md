# Neighborhood Map Project

This is my deployment of the final assessment project for [Udacity's Front-End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The app is fully interactive and dynamically displays images and markers for the locations I chose using data from Google Maps and FourSquare. The site is mobile ready, accessible for screenreader navigation, and the production build caches data for offline use. Neighborhood Map utilizes the Google Maps, and FourSquare APIs to show the locations and information about some of my favorite places I visited while in Melbourne, Australia.

## Live Demo

See Live at: [https://neighborhood-map-patrickolvera.netlify.app/](https://neighborhood-map-patrickolvera.netlify.app/)

## Installation

To get Neighborhood Map up and running on your local machine there are two options; NPM and Yarn.

### NPM
Npm installs automatically with Node.js. You can check your node version by opening up your terminal and typing:

    node -v

If node isn't installed follow the download instructions on the [NodeJS page](https://github.com/nodejs/node#download).

### Yarn
Yarn is a package manager developed by Facebook with security, speed, and reliability in mind.

To install Yarn visit [yarnpkg.com](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

### Download Neighborhood Map

To download the projects files and dependencies run:

    git clone https://github.com/patrickolvera/neighborhood-map.git
    cd neighborhood-map

Then depending upon your package manager:

    npm install
    yarn install


### Running the app

Start the development server with:

    npm start
    yarn start

Create production build with:

    npm run build
    yarn build

## Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app) by FaceBook
- [React-Google-Mpas](https://github.com/tomchentw/react-google-maps) by tomchentw
- [React-Burger-Menu](https://github.com/negomi/react-burger-menu) by negomi

## License

This project is licensed under the MIT license. View [`LICENSE`](LICENSE) for more information.
