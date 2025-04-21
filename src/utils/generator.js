const fs = require('fs-extra');
const path = require('path');

/**
 * Generate website based on user choices
 * @param {Object} options User selected options
 * @param {string} targetPath Path to create the project
 */
async function generateWebsite(options, targetPath) {
  const { template, colorScheme, title, projectName } = options;

  // Create project directory
  await fs.ensureDir(targetPath);

  // Read template files
  const templateDir = path.join(__dirname, '..', 'templates', template);
  const cssDir = path.join(templateDir, 'css');
  const jsDir = path.join(templateDir, 'js');

  // Read the HTML template
  let htmlContent = await fs.readFile(path.join(templateDir, 'index.html'), 'utf8');

  // Replace placeholders in HTML
  htmlContent = htmlContent
    .replace(/class="light-theme"/g, `class="${colorScheme}-theme"`)
    .replace(/<title>.*<\/title>/g, `<title>${title}</title>`);

  // For portfolio template, replace "Your Name" with the title
  if (template === 'portfolio') {
    htmlContent = htmlContent
      .replace(/Your Name/g, title)
      .replace(/2023 Your Name/g, `2023 ${title}`);
  }

  // For blog template, replace "Blog Name" with the title
  if (template === 'landing') {
    htmlContent = htmlContent
      .replace(/Product Name/g, title)
      .replace(/Your Company/g, title);
  }

  // For blog template, replace "Blog Name" with the title
  if (template === 'blog') {
    htmlContent = htmlContent
      .replace(/Blog Name/g, title);
  }

  // Write the HTML file
  await fs.writeFile(path.join(targetPath, 'index.html'), htmlContent);

  // Copy and customize CSS
  let cssContent = await fs.readFile(path.join(cssDir, 'styles.css'), 'utf8');
  await fs.writeFile(path.join(targetPath, 'styles.css'), cssContent);

  // Copy and customize JS
  let jsContent = await fs.readFile(path.join(jsDir, 'script.js'), 'utf8');
  await fs.writeFile(path.join(targetPath, 'script.js'), jsContent);

  // Create a simple README file
  const readmeContent = generateReadme(template, title, projectName, colorScheme);
  await fs.writeFile(path.join(targetPath, 'README.md'), readmeContent);

  return true;
}

/**
 * Generate a README file for the project
 * @param {string} template Template type
 * @param {string} title Website title
 * @param {string} projectName Project name
 * @param {string} colorScheme Color scheme (light or dark)
 * @returns {string} README content
 */
function generateReadme(template, title, projectName, colorScheme) {
  return `# ${title}

This is a ${template} website template generated with QuickWeb.

## Getting Started

To view the website, simply open the index.html file in your browser.

## Customization

You can customize this template by editing the following files:

- index.html - The main HTML structure
- styles.css - The CSS styles for the website
- script.js - The JavaScript functionality

## Features

- Responsive design that works on mobile and desktop
- ${colorSchemeFeatures(template)}
- Clean, modern design
- Easy to customize

## Credits

Generated with [QuickWeb](https://github.com/Nom-nom-hub/quick-web)
`;
}

/**
 * Get features based on template type
 * @param {string} template Template type
 * @returns {string} Features description
 */
function colorSchemeFeatures(template) {
  switch (template) {
    case 'portfolio':
      return 'Professional portfolio layout with about, projects, and contact sections';
    case 'landing':
      return 'Conversion-focused landing page with features, pricing, and call-to-action sections';
    case 'blog':
      return 'Blog layout with featured posts, sidebar, and category organization';
    default:
      return 'Basic website structure';
  }
}

module.exports = { generateWebsite };
