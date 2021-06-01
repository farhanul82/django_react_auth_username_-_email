import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../Redux/Action/auth";

const Layout = ({  load_user, children }) => {
  useEffect(() => {
    load_user();
  }, []);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
