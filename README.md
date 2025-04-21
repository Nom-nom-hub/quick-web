# QuickWeb

QuickWeb is a command-line tool that allows you to instantly generate a basic HTML, CSS, and JavaScript website template. It's perfect for quickly starting new web projects with a solid foundation.

## Features

- 🚀 **Simple CLI**: Easy-to-use command-line interface with interactive prompts
- 🎨 **Multiple Templates**: Choose from portfolio, landing page, or blog templates
- 📱 **Responsive Design**: All templates are mobile-friendly out of the box
- 🌓 **Color Schemes**: Select between light and dark color modes
- 🧩 **Customizable**: Generated templates are easy to modify and expand
- 📦 **Lightweight**: Minimal dependencies for fast installation

## Installation

Install QuickWeb globally using npm:

```bash
npm install -g quick-web
```

## Usage

To create a new website template, run:

```bash
quick-web
```

You'll be prompted to enter:

1. Project name (used for the folder name)
2. Website title
3. Template type (portfolio, landing page, or blog)
4. Color scheme (light or dark)

You can also specify a custom directory:

```bash
quick-web --directory my-custom-directory
```

## Templates

### Portfolio Template

A clean, professional portfolio website with:
- Hero section with call-to-action
- About me section
- Projects showcase
- Skills section
- Contact form
- Responsive navigation

### Landing Page Template

A conversion-focused landing page with:
- Hero section with dual call-to-action buttons
- Features section
- Pricing plans
- Testimonials
- FAQ accordion
- Call-to-action section
- Footer with multiple columns

### Blog Template

A complete blog layout with:
- Featured posts section
- Latest posts list
- Sidebar with widgets
- Category organization
- Responsive design
- Newsletter signup

## Customization

After generating a template, you can customize it by editing:

- `index.html` - The main HTML structure
- `styles.css` - The CSS styles for the website
- `script.js` - The JavaScript functionality

## Examples

### Portfolio Website
```bash
quick-web
# Enter "portfolio-site" as project name
# Enter "John Doe - Web Developer" as website title
# Select "portfolio" as template
# Select "light" as color scheme
```

### Product Landing Page
```bash
quick-web
# Enter "awesome-product" as project name
# Enter "Awesome Product - The Best Solution" as website title
# Select "landing" as template
# Select "dark" as color scheme
```

### Personal Blog
```bash
quick-web
# Enter "my-blog" as project name
# Enter "My Thoughts & Ideas" as website title
# Select "blog" as template
# Select "light" as color scheme
```

## License

ISC

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
