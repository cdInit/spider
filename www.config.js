module.exports = {
    apps: [{
        name: "Spider",
        script: "./bin/www",
        watch: true,
        env: {
            "NODE_ENV": "production",
            "PORT": 3000
        }
    }]
}
