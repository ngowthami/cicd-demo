# 1️⃣ Use official Node image
FROM node:18

# 2️⃣ Set working directory inside container
WORKDIR /app

# 3️⃣ Copy package files first
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy remaining source code
COPY . .

# 6️⃣ Expose the app port
EXPOSE 3000

# 7️⃣ Start the application
CMD ["node", "server.js"]
