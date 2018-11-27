var tagDict = { 'python': 'Python', 
    'web': 'Web Markup & Scripting', 
    'java': 'Java', 
    'cpp': 'C++', 
    'professional': 'Professional',
    'academic': 'Academic',
    'outreach': 'Outreach',
    'oss': 'Open Source'
}

function generateTags() {
    elems = document.getElementsByClassName('filterContent');
    for (var i = 0; i < elems.length; i++) {
        // for each element, generate a tag inside the <div class="tags"> element for each class in the parent div
        classNames = elems[i].className.split(" ");
        // get the tags div
        var tagDiv = elems[i].getElementsByClassName('tags');
        // clean the class names to remove filterContent & hideaway
        if (classNames.indexOf('filterContent') >= 0) {
            classNames.splice(classNames.indexOf('filterContent'), 1);
        }
        if (classNames.indexOf('hideaway') >= 0) {
            classNames.splice(classNames.indexOf('hideaway'), 1);
        }
        for (var classIdx = 0; classIdx < classNames.length; classIdx++) {
            var newButton = document.createElement('button');
            newButton.disabled = true;
            newButton.innerHTML = tagDict[classNames[classIdx]];
            newButton.className = "fun-button";
            tagDiv[0].appendChild(newButton);
        }
    }
}

