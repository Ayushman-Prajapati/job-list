const jobList = [
    "Software Engineer",
    "Web Developer",
    "Data Analyst",
    "Marketing Manager",
    "Graphic Designer",
    "Project Manager",
    "Human Resources Specialist",
    "Financial Analyst",
    "Customer Service Representative",
    "Sales Associate"
];

const searchInput = document.getElementById("searchInput");
const jobListElement = document.getElementById("jobList");

// Function to display job list
function displayJobList(jobs) {
    jobListElement.innerHTML = "";
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.textContent = job;
        jobListElement.appendChild(li);
    });
}

// Function to filter job list based on search input
function filterJobs(searchTerm) {
    const filteredJobs = jobList.filter(job => job.toLowerCase().includes(searchTerm.toLowerCase()));
    displayJobList(filteredJobs);
}

// Event listener for search input
searchInput.addEventListener("input", function() {
    filterJobs(this.value);
});

// Display initial job list
displayJobList(jobList);