export default {
    endpoint: process && process.env.KORUS_SERVER_LOCAL === "true" ? "localhost:8080" : "api.korus.ga"
};