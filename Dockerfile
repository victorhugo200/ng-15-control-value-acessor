FROM node:16.13.2
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli@15.2.11
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]