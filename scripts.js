const body = document.body;

let i = 20;
for(x=0; x<i; x++) {
    var row = document.createElement("div");
    row.className = "row";
    for(y=0; y<i; y++){
        var column = document.createElement("div");
        column.className = "column";
        row.append(column);
    }
    container.append(row);
}

