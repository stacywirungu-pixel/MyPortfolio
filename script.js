/* General Styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f6fa;
    color: #333;
    line-height: 1.6;
}

/* Navigation Bar */
header {
    background-color: #172554;
    color: white;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    font-size: 25px;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;
}

nav a:hover {
    color: #60a5fa;
}

/* Home Section */
#home {
    min-height: 400px;
    background: linear-gradient(135deg, #172554, #2563eb);
    color: white;
    text-align: center;
    padding: 110px 20px;
}

#home h1 {
    font-size: 42px;
    margin-bottom: 10px;
}

#home h3 {
    font-size: 22px;
    margin-bottom: 15px;
}

#home p {
    max-width: 600px;
    margin: 0 auto 25px;
}

.btn {
    display: inline-block;
    background-color: white;
    color: #172554;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
}

.btn:hover {
    background-color: #bfdbfe;
}

/* General Sections */
section:not(#home) {
    padding: 65px 10%;
    text-align: center;
}

section h2 {
    color: #172554;
    font-size: 30px;
    margin-bottom: 25px;
}

/* Skills */
#skills ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
}

#skills li {
    background-color: #dbeafe;
    padding: 12px 25px;
    border-radius: 20px;
    color: #172554;
    font-weight: bold;
}

/* Projects */
.project {
    background-color: white;
    padding: 25px;
    margin: 20px auto;
    max-width: 600px;
    border-radius: 12px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.08);
}

/* Footer */
footer {
    background-color: #172554;
    color: white;
    text-align: center;
    padding: 20px;
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
    header {
        flex-direction: column;
        gap: 15px;
    }

    nav a {
        display: inline-block;
        margin: 5px;
    }

    #home h1 {
        font-size: 30px;
    }
}