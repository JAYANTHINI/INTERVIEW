const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

const courses = [
    {
        id: 1,
        name: "Basic Algorithm",
        lessons: 25,
        startDate: "27 Jan, 2023",
        completedLessons: 10,
        duration: "14h 38m 56s",
        icon: "🟪", // You can use an emoji as a placeholder for the icon
        completionPercentage: 48
    },
    {
        id: 2,
        name: "Web Development",
        lessons: 45,
        startDate: "23 Feb, 2023",
        completedLessons: 40,
        duration: "36h 30m 00s",
        icon: "🔷",
        completionPercentage: 97
    },
    {
        id: 3,
        name: "Basic Data Science",
        lessons: 37,
        startDate: "14 Jan, 2023",
        completedLessons: 9,
        duration: "37h 00m 00s",
        icon: "🟧",
        completionPercentage: 40
    },
    {
        id: 4,
        name: "UI/UX Design",
        lessons: 32,
        startDate: "19 Feb, 2023",
        completedLessons: 26,
        duration: "16h 40m 50s",
        icon: "🟩",
        completionPercentage: 84
    },
    {
        id: 5,
        name: "Project Management",
        lessons: 19,
        startDate: "27 Jan, 2023",
        completedLessons: 14,
        duration: "13h 20m 00s",
        icon: "🟧",
        completionPercentage: 89
    }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
