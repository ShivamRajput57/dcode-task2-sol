// Array of blog posts
const blogPosts = [
    {
        title: "NSUT Annual Fest 2024: What to Expect!",
        date: "September 1, 2024",
        author: "Ankita Sharma",
        summary: "An exciting look into the upcoming NSUT Annual Fest, with performances, competitions, and celebrity guests."
    },
    {
        title: "New Library Hours and Facilities",
        date: "August 28, 2024",
        author: "Ravi Kumar",
        summary: "The NSUT library has extended its hours! Read more about the new facilities and study rooms available for students."
    },
    {
        title: "Workshops You Shouldn't Miss This Semester",
        date: "August 25, 2024",
        author: "Nidhi Verma",
        summary: "A roundup of the most impactful workshops happening this semester, from coding boot camps to art therapy sessions."
    },
    {
        title: "NSUT Sports Update: Highlights from Last Week",
        date: "August 22, 2024",
        author: "Saurabh Singh",
        summary: "Check out the latest updates from NSUT's sports teams and their recent victories."
    }
];

// Function to generate blog post HTML
function generateBlogPosts() {
    const blogContainer = document.getElementById("blog-posts");
    
    blogPosts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("blog-post");

        const title = document.createElement("h2");
        title.textContent = post.title;
        
        const meta = document.createElement("p");
        meta.innerHTML = `<strong>Date:</strong> ${post.date} | <strong>Author:</strong> ${post.author}`;
        
        const summary = document.createElement("p");
        summary.textContent = post.summary;

        article.appendChild(title);
        article.appendChild(meta);
        article.appendChild(summary);
        
        blogContainer.appendChild(article);
    });
}

// Call the function to generate posts on page load
window.onload = generateBlogPosts;
