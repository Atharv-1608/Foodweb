const heading = React.createElement("div",{id : "heading1"},[React.createElement("h1",{id : "heading"},"hello from react"),React.createElement("h1",{id : "heading5"},React.createElement("div",{id : "heading"},[React.createElement("h1",{id : "heading3"},"hello from react"),React.createElement("h2",{id : "heading9"},"hello from react")]))]);

    const root =  ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);