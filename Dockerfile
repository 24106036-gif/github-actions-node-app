FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Department of Computer Science & Engineering (AI & ML) | APSIT
# DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
# (ARTIFICIAL INTELLIGENCE & MACHINE LEARNING)

EXPOSE 3000

CMD ["node", "app.js"]
