FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tailwindcss -i ./internal/views/css/input.css -o ./static/css/output.css --minify

FROM golang:1.23-alpine AS backend-builder
WORKDIR /app
COPY . .
COPY --from=frontend-builder /app/static/css/output.css /app/static/css/output.css
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o portfolio-app ./cmd/main.go

FROM alpine:3.19
WORKDIR /app
RUN apk --no-cache add ca-certificates
COPY --from=backend-builder /app/portfolio-app /app/
COPY --from=backend-builder /app/static /app/static

ENV PORT=8080

EXPOSE 8080
CMD ["/app/portfolio-app"]
