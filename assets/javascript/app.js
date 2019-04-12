$(document).ready(function (){

    $(document).on("click", "#submit", trainRide());

    var config = {
        apiKey: "AIzaSyAwlqe0rDWjI1m_2LfmAibuzyc5dR-Md44",
        authDomain: "train-time-9c283.firebaseapp.com",
        databaseURL: "https://train-time-9c283.firebaseio.com",
        projectId: "train-time-9c283",
        storageBucket: "train-time-9c283.appspot.com",
        messagingSenderId: "846962738503"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    function trainRide (event) {
        event.preventDefault();

        getInput();
        writeInfo();
    }

    function getInput() {
        trainID = $("#train").val().trim();
        endPoint = $("#destination").val().trim();
        firstDepart = $("#initial-departure").val().trim();
        recurrence = $("#frequency").val().trim();
        
    }

    writeInfo() {
        var locomotive = $("<tr>");
        
        var tdName = $("<td>");
        tdName.text(trainID);

        var tdDestination = $("<td>");
        tdDestination.text(endPoint);

        var tdFrequency = $("<td>");
        tdFrequency.text(recurrence);

        var tdArrival = $("<td>");
        tdArrival.text();

        var tdMinAway = $("<td>");
        tdMinAway.text();

        locomotive.append(tdName);
        locomotive.append(tdDestination);
        locomotive.append(tdFrequency);
        locomotive.append(tdArrival);
        locomotive.append(tdMinAway);

        $("#itinerary").append(locomotive);
    }


});