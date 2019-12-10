function CreateTableFromJSON( jsObject, city) {
   
    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < jsObject.length; i++) {
        for (var key in jsObject[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.className += "table";
    table.className += " table-borderless";
    

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
   
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        var content = col[i];
        if (content == 'CG') {
            th.innerHTML = ''//col[i];
        }
        else if (content == 'H') {
            th.innerHTML = content;
            th.setAttribute("style", "background-color:" + HertzColor);
        }
        else if (content == 'T') {
            th.innerHTML = content;
            th.setAttribute("style", "background-color:" + ThriftyColor);
        }
        else if (content == 'F') {
            th.innerHTML = content;
            th.setAttribute("style", "background-color:" + FirefliyCOlor);
        }

        else if (content == 'D') {
            th.innerHTML = content;
            th.setAttribute("style", "background-color:" + DollarColor);
        }
        else {

            th.innerHTML = content;
        }

       
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < jsObject.length; i++) {
       
        tr = table.insertRow(-1);
        //if (i % 2 === 1) {
        //    tr.setAttribute("style", "background-color: lightskyblue");
        //};
        

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsObject[i][col[j]];
            //tabCell.className += 'col-sm-12';
        }
    }

    //// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    //var divContainer = document.getElementById("showData");
    var div = document.createElement("div");
    div.setAttribute("style", "max-height:1000px !important; text-align:center;  font-weight: bold; ");
     div.innerHTML = city;
     //divContainer.appendChild(table);
     div.appendChild(table);

    return div;
}