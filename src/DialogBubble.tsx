import React from "react";
const styles: any = {
  root: {
    width: "80vw",
    left: "10vw",
    height: "25vh",
    top: 50,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
  },
  text: {
    margin: 25,
    fontSize: 20,
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif;",
  },
};

export default () => {
  return (
    <div style={styles.root}>
      <div style={styles.text}>
        Here is some example text where the script would go. This text would
        explain the story of this level and maybe go into detail about certain
        cool concepts. But this is just a demo so this will have to do. I'm
        going to keep writing stuff here because I havent filled out enough
        space quite yet. I like cheese, do you like cheese? This is riveting
        story telling. Well getting an award this. Masters is for nerds. Real
        storytellers live in a shoebox, sniff glue and make wee video games in
        React because gotta get that CV looking banging. I could have just
        copied and pasted text but here I am writing shitty blurbs. Okay we good
        now.
      </div>
    </div>
  );
};
