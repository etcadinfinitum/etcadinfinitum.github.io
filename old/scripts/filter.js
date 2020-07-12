var filters = [];

function filterDivs(className) {
    if (filters.indexOf(className) > -1) {
        // remove the filter, deactivate the button
        filters.splice(filters.indexOf(className), 1);
        var btn = document.getElementById(className);
        btn.className = btn.className.replace(" active", "");
    } else {
        // add the filter
        filters.push(className);
        var btn = document.getElementById(className);
        btn.className += " active";
    }
    showItems();
        
}

function showItems() {
    divs = document.getElementsByClassName("filterContent");
    for (var i = 0; i < divs.length; i++) {
        var hide = true;
        for (var filterIdx = 0; filterIdx < filters.length; filterIdx++) {
            if (divs[i].className.indexOf(filters[filterIdx]) > -1) {
                hide = false;
            }
        }
        if (filters.length == 0) {
            hide = false;
        }
        if (hide) {
            if (divs[i].className.indexOf("hideaway") < 0) {
                divs[i].className += " hideaway";
            }
        } else {
            if (divs[i].className.indexOf("hideaway") > 0) {
                classes = divs[i].className.split(" ");
                classes.splice(classes.indexOf("hideaway"), 1);
                newClassList = "";
                for (var classIdx = 0; classIdx < classes.length; classIdx++) {
                    newClassList += classes[classIdx];
                    if (classIdx < classes.length - 1) {
                        newClassList += " ";
                    }
                }
                divs[i].className = newClassList;
            }
        }
    }
}
