const subTabs = document.getElementsByClassName("tab");


for (const tab of subTabs) {
    tab.addEventListener('click', function() {
        for(var i = 0; i < 5; i++)
        {
            subTabs[i].style.color = '#408ade';
            subTabs[i].style.backgroundColor = 'white';
        }

        tab.style.color = 'white';
        tab.style.backgroundColor = '#408ade';

        if(tab == subTabs[0])
        {

            document.getElementById("vision-tab").hidden = false;
            document.getElementById("mission-tab").hidden = true;
            document.getElementById("objective-tab").hidden = true;
            document.getElementById("corevalues-tab").hidden = true;
            document.getElementById("partnership-tab").hidden = true;
        }
        if(tab == subTabs[1])
        {

            document.getElementById("vision-tab").hidden = true;
            document.getElementById("mission-tab").hidden = false;
            document.getElementById("objective-tab").hidden = true;
            document.getElementById("corevalues-tab").hidden = true;
            document.getElementById("partnership-tab").hidden = true;
        }
        if(tab == subTabs[2])
        {

            document.getElementById("vision-tab").hidden = true;
            document.getElementById("mission-tab").hidden = true;
            document.getElementById("objective-tab").hidden = false;
            document.getElementById("corevalues-tab").hidden = true;
            document.getElementById("partnership-tab").hidden = true;
        }
        if(tab == subTabs[3])
        {
            document.getElementById("vision-tab").hidden = true;
            document.getElementById("mission-tab").hidden = true;
            document.getElementById("objective-tab").hidden = true;
            document.getElementById("corevalues-tab").hidden = false;
            document.getElementById("partnership-tab").hidden = true;
        }
        if(tab == subTabs[4])
        {
            document.getElementById("vision-tab").hidden = true;
            document.getElementById("mission-tab").hidden = true;
            document.getElementById("objective-tab").hidden = true;
            document.getElementById("corevalues-tab").hidden = true;
            document.getElementById("partnership-tab").hidden = false;
        }
    })
}
