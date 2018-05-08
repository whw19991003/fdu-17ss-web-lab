window.onload=function (ev) {
    const countries = [
        {
            name: "Canada",
            continent: "North America",
            cities: ["Calgary", "Montreal", "Toronto"],
            photos: ["canada1.jpg", "canada2.jpg", "canada3.jpg"]
        },
        {
            name: "United States",
            continent: "North America",
            cities: ["Boston", "Chicago", "New York", "Seattle", "Washington"],
            photos: ["us1.jpg", "us2.jpg"]
        },
        {
            name: "Italy",
            continent: "Europe",
            cities: ["Florence", "Milan", "Naples", "Rome"],
            photos: ["italy1.jpg", "italy2.jpg", "italy3.jpg", "italy4.jpg", "italy5.jpg", "italy6.jpg"]
        },
        {
            name: "Spain",
            continent: "Europe",
            cities: ["Almeria", "Barcelona", "Madrid"],
            photos: ["spain1.jpg", "spain2.jpg"]
        }
    ];
    var contain = document.getElementsByClassName("flex-container");
    contain[0].innerHTML = '<div class="item"></div> ' + '<div class="item"></div> ' + '<div class="item"></div> ' + '<div class="item"></div> '
    var items = document.getElementsByClassName("item");
    for (let i = 0; i < 4; i++) {
        let content = '';
        content += '<h2>' + countries[i].name + '</h2>';
        content += '<p>' + countries[i].continent + '</p>';
        let address = '';
        address += '<h3>Cities</h3>';
        for (let j=0;j<countries[i].cities.length;j++){
            address += '<p>' + countries[i].cities[j] + '</p>';
        }
        content += '<div class="inner-box">' + address + '</div>';
        let photo = '';
        photo += '<h3>Popular Photo</h3>';
        for (let j = 0;j<countries[i].photos.length;j++){
            let src = "images/"+countries[i].photos[j];
            photo += '<img class="photo" src='+src+'>'
        }
        content += '<div class="inner-box">' + photo + '</div>';
        content += '<button>Visit</button>';
        items[i].innerHTML = content;
    }
};

