# Choti Link

URL shortener built with **Bun**, Express.js, MongoDB, and EJS. Create short, memorable links with comprehensive analytics and server-side rendering.

## Features

- Built with Bun runtime for optimal performance
- Convert long URLs into short, shareable links
- Generate unique identifiers using nanoid
- Comprehensive tracking with detailed visit history
- Dynamic pages with EJS templates
- MongoDB Storage- NoSQL Database

## Tech Stack

- **Runtime**: Bun (JavaScript runtime)
- **Backend**: Express.js 
- **Database**: MongoDB with Mongoose 
- **Template Engine**: EJS 
- **ID Generation**: nanoid 

## Project Structure

```
choti-link/
├── controllers/
│   └── url.controller.js    # URL handling logic
├── models/
│   └── url.model.js        # MongoDB schema definitions
├── routes/
│   ├── static.route.js     # Static page routes
│   └── url.route.js        # URL shortening routes
├── views/
│   └── home.ejs           # Homepage template
├── bun.lockb             # Bun lock file
├── connection.js         # MongoDB connection setup
├── index.js              # Main server file
├── package.json          # Project configuration
└── README.md             # Documentation
```

## Installation

### Prerequisites
- [Bun](https://bun.sh) installed on your system
- MongoDB instance (local or MongoDB Atlas)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/idreamfyrei/choti-link.git
   cd choti-link
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT= your-port
   MONGODB_URI= mongo_uri_here
   ```

4. **Start the server**
   ```bash
   bun start
   ```
   
   Or for development with watch mode:
   ```bash
   bun --watch run index.js
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:8000`

## Usage

### Web Interface

1. Visit `http://localhost:8000`
2. Enter your long URL in the input field
3. Click "Generate" to generate a short link
4. View analytics and visit history

### Code Structure

#### Controllers (`controllers/url.controller.js`)
- Handle URL shortening logic
- Manage redirect functionality
- Process analytics requests

#### Models (`models/url.model.js`)
- Define MongoDB schemas


#### Routes
- `routes/url.route.js` - API endpoints for URL operations
- `routes/static.route.js` - Serve static pages and assets

#### Views (`views/home.ejs`)
- EJS templates for server-side rendering
- Dynamic content with real-time data

### Database Connection (`connection.js`)
- MongoDB connection setup
- Connection error handling
