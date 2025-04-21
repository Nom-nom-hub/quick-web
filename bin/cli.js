#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { generateWebsite } = require('../src/utils/generator');
const { version } = require('../package.json');

// Set up CLI program
program
  .version(version)
  .description('QuickWeb - Instantly generate website templates')
  .option('-d, --directory <directory>', 'Target directory for the website')
  .parse(process.argv);

const options = program.opts();

// Questions for the user
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is your project name?',
    default: 'my-website',
    validate: (input) => {
      if (/^([A-Za-z\-_\d])+$/.test(input)) return true;
      return 'Project name may only include letters, numbers, underscores and hashes.';
    },
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your website?',
    default: 'My Website',
  },
  {
    type: 'list',
    name: 'template',
    message: 'Which template would you like to use?',
    choices: ['portfolio', 'landing', 'blog'],
    default: 'portfolio',
  },
  {
    type: 'list',
    name: 'colorScheme',
    message: 'Which color scheme would you prefer?',
    choices: ['light', 'dark'],
    default: 'light',
  },
];

console.log(chalk.blue.bold('\n🚀 Welcome to QuickWeb - Website Template Generator 🚀\n'));

// Start the CLI prompts
inquirer.prompt(questions).then((answers) => {
  const targetDirectory = options.directory || answers.projectName;
  
  // Create the project directory
  const projectPath = path.resolve(process.cwd(), targetDirectory);
  
  // Check if directory already exists
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red.bold(`\nError: Directory ${targetDirectory} already exists. Please choose a different name or delete the existing directory.\n`));
    process.exit(1);
  }
  
  // Generate the website
  generateWebsite(answers, projectPath)
    .then(() => {
      console.log(chalk.green.bold(`\n✅ Website template generated successfully in ${targetDirectory}!\n`));
      console.log(chalk.yellow('To view your website:'));
      console.log(chalk.cyan(`  cd ${targetDirectory}`));
      console.log(chalk.cyan('  open index.html (or double-click the file in your file explorer)\n'));
    })
    .catch((err) => {
      console.log(chalk.red.bold('\nError generating website template:'));
      console.error(err);
      process.exit(1);
    });
});
