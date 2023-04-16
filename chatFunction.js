function selectFriend(friendId) {
    // Remove the 'active' class from all friend elements
    var friends = document.getElementsByClassName("friend");
    for (var i = 0; i < friends.length; i++) {
        friends[i].classList.remove("active");
    }
    
    // Add the 'active' class to the selected friend element
    var selectedFriend = document.getElementById(friendId);
    selectedFriend.classList.add("active");
    
    // Update the status of the selected friend in the chat header
    var status = selectedFriend.querySelector("p").innerHTML;
    var chatHeader = document.querySelector(".header h1");
    chatHeader.innerHTML = selectedFriend.querySelector("h2").innerHTML + " (" + status + ")";
}