import { clear, middleware, newInstance, options } from "apicache";

let cache = middleware;

options({
    statusCodes: {
        exclude: [404, 429, 500],
        include: [200, 304],
    },
});

options();

clear();

cache = newInstance({
    statusCodes: {
        exclude: [404, 429, 500],
        include: [200, 304],
    },
});
