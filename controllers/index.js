const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const withAuth = require("../utils/auth");

router.use("/", homeRoutes);
router.use("/dashboard", withAuth, dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
