
const getViews=(blog)=>blog.views>1000 ? "true" : "false"



const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false