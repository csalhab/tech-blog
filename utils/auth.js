const withAuth = (req, res, next) => {
  //If the user is not logged in, redirect the user to the login page
  //If the user is logged in, allow them to view/edit posts
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
