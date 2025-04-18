import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const availableLinks = links.map((link) => {
    return <a key={link} href={'#'+ link} >{link}</a>
  })

  return <nav>{availableLinks}</nav>;
}

export default NavBar;
