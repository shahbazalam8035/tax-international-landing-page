import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default ({ mode }) => {
  console.log(`############ BUILD MODE : ${mode} ############`, );

  // Load environment variables based on the build mode (development or production)
  const env = dotenv.config({
    path: `.env.${mode}`,
  }).parsed;

  return {
    plugins: [react()],
    build: {
      sourcemap: true,
    },
    define: {
      'process.env': {
        VITE_API_BASE_URL: JSON.stringify(env.VITE_API_BASE_URL)
        // Add other environment variables as needed
      },
    },
  };
};