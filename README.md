# DEEPTAPOD.AI

Follow the instructions below to get the project up and running.

## Prerequisites

- Node.js version 22.2.0

## Setup Steps

### 1. Install Dependencies

Install the project dependencies specified in `package.json`.

```bash
npm install
```

### 2. Install node-gyp

Install `node-gyp`, which is necessary for building native addons.

```bash
npm install -g node-gyp
```

### 3. Create `.env` File

Create a `.env` file with the necessary environment variables. You can use `.env.example` file as your guide.

```bash
PORT=
MONGO_URL=mongodb://localhost:27017/deeptapod
JWT_SECRET=YourJWTSecret
```

### 4. Run build-addons.sh

Run the `build-addons.sh` script located in the `src` directory.

```bash
./src/build-addons.sh
```

## Running the Application

To run the application, use the following command:

```bash
npm run dev
```

## Troubleshooting

If you encounter any issues:

1. **Check Environment Variables:**
   - Ensure all necessary environment variables are correctly set in the `.env` file.

2. **Dependency Issues:**
   - Ensure all dependencies are correctly specified in `package.json`.
   - Check compatibility of Node.js version with your project dependencies.
