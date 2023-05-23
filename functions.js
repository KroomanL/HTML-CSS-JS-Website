function openapplyform() {
  document.getElementById("apply-form").style.display = "block";
}

function closeapplyform() {
  document.getElementById("apply-form").style.display = "none";
}

function applysuccess() {
  alert("Thank you! We will endorse you to the nearest company near you.");
}

window.onscroll = function () {
  showscroll();
};

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

function openapplyforml() {
  document.getElementById("apply-form").style.display = "block";
}

function closeapplyforml() {
  document.getElementById("apply-form").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".main-nav-hamburger");

  hamburger.addEventListener("click", function () {
    menuItems.classList.toggle("show");
  });
});

// display jobs functions #####################################################

var availablejobs = [
  {
    faicontype: "fa-solid",
    faicon: "fa-users",
    position: "Customer Support",
    location: "Quezon City",
    salarymin: "₱20,000",
    salarymax: "₱26,000",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur modi saepe commodi, culpa, nobis perspiciatis repudiandae cum rem reiciendis illo, nemo harum repellat nulla repellendus fugit suscipit officia molestiae! Dolor mollitia sit consequatur, eaque nulla excepturi provident fuga ex magnam aliquid perferendis necessitatibus iure harum est itaque voluptate quas maiores doloremque magni quam? Rerum saepe odit libero illum cupiditate tenetur explicabo? Odit accusantium deserunt tempore ut cupiditate harum, sit, similique veritatis perspiciatis aut dolorem labore perferendis, ad quia aperiam exercitationem mollitia! Sint repellendus quod consectetur, suscipit omnis minima ipsum. Fugiat id officiis natus numquam ex pariatur rem quasi illo.",
  },
  {
    faicontype: "fa-solid",
    faicon: "fa-users-gear",
    position: "Technical Support",
    location: "Quezon City",
    salarymin: "₱24,000",
    salarymax: "₱28,000",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur modi saepe commodi, culpa, nobis perspiciatis repudiandae cum rem reiciendis illo, nemo harum repellat nulla repellendus fugit suscipit officia molestiae! Dolor mollitia sit consequatur, eaque nulla excepturi provident fuga ex magnam aliquid perferendis necessitatibus iure harum est itaque voluptate quas maiores doloremque magni quam? Rerum saepe odit libero illum cupiditate tenetur explicabo? Odit accusantium deserunt tempore ut cupiditate harum, sit, similique veritatis perspiciatis aut dolorem labore perferendis, ad quia aperiam exercitationem mollitia! Sint repellendus quod consectetur, suscipit omnis minima ipsum. Fugiat id officiis natus numquam ex pariatur rem quasi illo.",
  },
  {
    faicontype: "fa-solid",
    faicon: "fa-users-gear",
    position: "Technical Support",
    location: "Pasig City",
    salarymin: "₱22,000",
    salarymax: "₱27,000",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur modi saepe commodi, culpa, nobis perspiciatis repudiandae cum rem reiciendis illo, nemo harum repellat nulla repellendus fugit suscipit officia molestiae! Dolor mollitia sit consequatur, eaque nulla excepturi provident fuga ex magnam aliquid perferendis necessitatibus iure harum est itaque voluptate quas maiores doloremque magni quam? Rerum saepe odit libero illum cupiditate tenetur explicabo? Odit accusantium deserunt tempore ut cupiditate harum, sit, similique veritatis perspiciatis aut dolorem labore perferendis, ad quia aperiam exercitationem mollitia! Sint repellendus quod consectetur, suscipit omnis minima ipsum. Fugiat id officiis natus numquam ex pariatur rem quasi illo.",
  },
  {
    faicontype: "fa-solid",
    faicon: "fa-users",
    position: "Customer Support Team Leader",
    location: "Quezon City",
    salarymin: "₱23,000",
    salarymax: "₱29,000",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam illo? Corporis similique nulla sunt fuga earum doloremque sequi, itaque in iusto ipsam, nesciunt nobis ducimus dolorem modi fugiat saepe quod eum? Expedita porro, harum cum ipsam architecto molestiae quas numquam soluta aliquam ut dolore ad sunt fugiat corporis quo maxime asperiores alias quos deserunt officia voluptatem non accusamus fugit dolorum. Tenetur vero alias nemo voluptas, impedit, obcaecati maiores autem recusandae laudantium quas a quisquam ea laborum aspernatur perferendis? Itaque recusandae amet tempore laborum eos soluta, adipisci nulla nemo illum sequi vel, iste ducimus! Ducimus ipsa vitae nostrum dignissimos beatae suscipit dolores eaque nisi id accusamus sint quo a eius rerum blanditiis nam, corrupti corporis asperiores iusto et tempora ex facilis quos iure. Ad repudiandae in, aut error rem amet atque eos dolores asperiores voluptate odio eum excepturi ipsam quo. Nisi officia nobis numquam? Hic provident adipisci eius at doloremque nemo totam odio ab magnam, laboriosam sed non consequatur quos commodi dolorem repudiandae quia dignissimos? Eos, accusantium? Repellat, itaque quo adipisci officiis soluta labore quos nam dolorum eaque commodi omnis, similique veritatis quas sit at sint exercitationem debitis voluptate earum laborum accusantium aspernatur consequatur repudiandae! Expedita quis obcaecati nisi modi vel recusandae officiis dolores doloremque labore dolore fugit voluptatem, quisquam dignissimos minima nostrum reiciendis a atque. Velit fuga, voluptatibus excepturi sunt reprehenderit doloribus asperiores magni necessitatibus nobis cupiditate error? Placeat beatae alias qui? Vitae consequuntur laboriosam hic porro, vero eos, aliquam quasi quia omnis soluta deleniti. Beatae, eaque blanditiis. Cum rem a laboriosam aliquam quidem adipisci quia. Cupiditate dolorum doloremque, esse, distinctio unde rerum fugit perferendis, blanditiis praesentium voluptate veniam. Necessitatibus, nam! Exercitationem, ipsam ducimus sunt laudantium, tenetur consequuntur unde nesciunt, labore quisquam natus quidem laborum. Officiis asperiores cum dolore, iusto error magni necessitatibus omnis quod, ut cupiditate eum aut.",
  },
  {
    faicontype: "fa-solid",
    faicon: "fa-users-gear",
    position: "Technical Support Team Leader",
    location: "Pasig City",
    salarymin: "₱24,000",
    salarymax: "₱31,000",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, inventore ducimus laboriosam iusto maxime ullam eligendi vitae id optio dolorum minima quos. Reprehenderit ut delectus perspiciatis ab, cumque officia, itaque praesentium amet provident iure sunt veniam ipsam. Excepturi possimus cupiditate nisi delectus beatae perspiciatis quas aliquam quod deleniti officia obcaecati ad quibusdam vitae expedita eaque ipsam voluptate accusamus dolore molestias, dolorum quisquam dignissimos debitis? Alias nemo magni autem harum, aliquam tenetur delectus unde corrupti porro fugiat amet natus nihil, vero sit dolor minus itaque iusto expedita explicabo. Neque ea aut dolores, asperiores quas aperiam exercitationem deleniti? Est tenetur ipsum molestiae natus autem molestias repellat aliquid mollitia distinctio eligendi odit necessitatibus ipsa corrupti, quas temporibus nemo id reprehenderit aperiam qui vitae modi dolorem inventore laborum? Illo numquam, facere enim ipsam, voluptatibus maiores officiis hic atque cumque ipsa sit eaque voluptate aspernatur saepe. Nulla facilis hic accusantium vitae eum reprehenderit reiciendis! Impedit, amet. Dolore rem sint distinctio veritatis quia ratione cumque facere eum iure beatae numquam libero, rerum praesentium corporis optio odio. Laborum voluptatum, cumque voluptatem harum eligendi explicabo in debitis fugit distinctio optio facilis, exercitationem voluptas tempore suscipit praesentium voluptatibus doloremque eos nesciunt, architecto assumenda non. Deleniti sequi maiores consequuntur vel.",
  },
];

JSON.stringify(availablejobs);
const jobsflex = document.getElementsByClassName("jobs-flex")[0];

for (a = 0; a < availablejobs.length; a++) {
  var jobsslide = document.createElement("div");
  jobsslide.setAttribute("class", "jobs-slide");

  jobsflex.append(jobsslide);

  var jobsicon = document.createElement("i");
  jobsicon.setAttribute("id", "jobs-icon" + a);

  var jobsposition = document.createElement("h4");
  jobsposition.setAttribute("id", "jobs-position" + a);

  var jobslocation = document.createElement("h5");
  jobslocation.setAttribute("id", "jobs-location" + a);

  var jobssalary = document.createElement("h5");
  jobssalary.setAttribute("id", "jobs-salary" + a);

  var jobstext = document.createElement("p");
  jobstext.setAttribute("id", "jobs-details-text" + a);
  jobstext.setAttribute("style", "display: none;");

  var btnview = document.createElement("button");
  btnview.setAttribute("class", "btn-view");
  btnview.setAttribute("onclick", "openviewdetails(this)");
  btnview.innerText = "View Details";

  jobsslide.append(
    jobsicon,
    jobsposition,
    jobslocation,
    jobssalary,
    jobstext,
    btnview
  );

  document
    .getElementById("jobs-icon" + a)
    .setAttribute(
      "class",
      availablejobs[a].faicontype + " " + availablejobs[a].faicon
    );
  document.getElementById("jobs-position" + a).innerHTML =
    availablejobs[a].position;
  document.getElementById("jobs-location" + a).innerHTML =
    availablejobs[a].location;
  document.getElementById("jobs-salary" + a).innerHTML =
    availablejobs[a].salarymin + " - " + availablejobs[a].salarymax;
  document.getElementById("jobs-details-text" + a).innerHTML =
    availablejobs[a].details;
}

function openviewdetails(detersibling) {
  var textid = detersibling.previousElementSibling.id;
  for (x = 0; x < availablejobs.length; x++) {
    var determineid = "jobs-details-text" + x;
    if (determineid == textid) {
      document.getElementById("jobs-details-pos").innerHTML =
        availablejobs[x].position;
      document.getElementById("jobs-details-loc").innerHTML =
        availablejobs[x].location;
      document.getElementById("jobs-details-sal").innerHTML =
        availablejobs[x].salarymin + " - " + availablejobs[x].salarymax;
      document.getElementById("jobs-details-text").innerHTML =
        availablejobs[x].details;

      break;
    }
  }
  document.getElementById("jobs-view").style.display = "block";
}

function closeviewdetails() {
  document.getElementById("jobs-view").style.display = "none";
}
