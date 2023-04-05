function openapplyform() {
    document.getElementById("apply-form").style.display = "block";
}

function closeapplyform() {
    document.getElementById("apply-form").style.display = "none";
}

function applysuccess() {
    alert("Thank you! We will endorse you to the nearest company near you.");
}

window.onscroll = function() {
    showscroll();
}

function showscroll() {
    if (window.scrollY > 100) {
        document.getElementById("scroll-btn").style.display = "block";
    } else {
        document.getElementById("scroll-btn").style.display = "none";
    }
}

function scrolltop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}