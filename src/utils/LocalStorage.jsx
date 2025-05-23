const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Complete report",
        description: "Finish the monthly sales report",
        date: "2025-03-10",
        category: "Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Attend the weekly team meeting",
        date: "2025-03-08",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Attend the weekly team meeting",
        date: "2025-03-08",
        category: "Meetings",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Attend the weekly team meeting",
        date: "2025-03-08",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        title: "Client follow-up",
        description: "Check in with the client about project status",
        date: "2025-03-11",
        category: "Client Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstname: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare presentation",
        description: "Create slides for product demo",
        date: "2025-03-09",
        category: "Work",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Code review",
        description: "Review junior developer's code submission",
        date: "2025-03-10",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstname: "Ananya",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Update documentation",
        description: "Revise API documentation for the latest release",
        date: "2025-03-12",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update documentation",
        description: "Revise API documentation for the latest release",
        date: "2025-03-12",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix bug in system",
        description: "Resolve login issue in production",
        date: "2025-03-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write blog post",
        description: "Draft a new article for company blog",
        date: "2025-03-13",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write blog post",
        description: "Draft a new article for company blog",
        date: "2025-03-13",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  //  console.log,(employees,admin)
  return {employees, admin}
};
