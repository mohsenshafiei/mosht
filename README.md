# MOSHT

This project is built using `vite` and `vanilla JS`. The instructions for setting up and running this project are mentioned below.

## Prerequisites
Before running this project, make sure you have  `node` and `pnpm` installed on your machine.

You can install Node.js from the official website: [https://nodejs.org](https://nodejs.org)

To install pnpm, you can use npm (which comes with Node.js). Run the following command to install pnpm globally on your system:

```bash
npm install -g pnpm
```


## Clone the Repository
First, you need to clone the repository from GitHub. You can do this by running the following command in your terminal:

```bash
git clone git@github.com:mohsenshafiei/mosht.git
```

Please replace `mosht` with the URL of this repository.

Once you have cloned the repository, navigate into the project's directory by using:

```bash
cd mosht
```

## Install Dependencies
Once you are in the project's directory, you can install the project's dependencies by running the following command:

```bash
pnpm install
```

This command will install all the dependencies defined in the `package.json` file.

## Running the Project in Development Environment
To run this project in the development environment, use the following command:

```bash
pnpm dev
```

This will start the development server. By default, you can access the application in your web browser at `http://localhost:5173`.

## Building the Project for Production
If you want to build this project for production, you can use the following command:

```bash
pnpm build
```

This command will generate the production-ready files in the `dist` folder in your project's directory. You can then use these files to deploy your application.
