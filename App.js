
    const heading= React.createElement("h1", 
        {
            id:"heading",
            xyz:"random attribute"
        }
    ,"Hello world from React!!");

    //This is how react internally works
    //heading variable is a react js object not an html element
    const root= ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);
