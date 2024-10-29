const heading = React.createElement("div", {id : "Parent"},
    [React.createElement("div",{id : "child"},
        [React.createElement("h1",{id : "head"},"Hello Recat" ),React.createElement("h2",{id : "heads"},"im a h1 tag"),
            React.createElement("h3",{id : "head"},"im a h3 tag")
        ]
    )],[
        React.createElement("div",{id : "child"},
            [React.createElement("h1",{id : "head"},"Hello Recat" ),React.createElement("h2",{id : "heads"},"im a h1 tag"),
                React.createElement("h3",{id : "head"},"im a h3 tag")
            ]
        )

    ]
);

console.log(heading);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);