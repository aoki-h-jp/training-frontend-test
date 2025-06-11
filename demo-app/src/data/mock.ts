import { Folder, Mail } from "@/types/mail";

export const folders: Folder[] = [
  {
    id: "inbox",
    name: "Inbox",
    count: 128
  },
  {
    id: "drafts",
    name: "Drafts",
    count: 9
  },
  {
    id: "sent",
    name: "Sent",
    count: 24
  },
  {
    id: "junk",
    name: "Junk",
    count: 23
  },
  {
    id: "trash",
    name: "Trash",
    count: 15
  },
  {
    id: "archive",
    name: "Archive",
    count: 25
  },
  {
    id: "social",
    name: "Social",
    count: 972
  },
  {
    id: "updates",
    name: "Updates",
    count: 342
  },
  {
    id: "forums",
    name: "Forums",
    count: 128
  },
  {
    id: "shopping",
    name: "Shopping",
    count: 8
  },
  {
    id: "promotions",
    name: "Promotions",
    count: 21
  }
];

export const mails: Mail[] = [
  {
    id: "1",
    from: "Alice Smith",
    to: "me@example.com",
    subject: "Re: Project Update",
    body: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.`,
    date: "2025-03-28T11:00:00",
    read: false,
    labels: ["work", "important"]
  },
  {
    id: "2",
    from: "William Smith",
    to: "me@example.com",
    subject: "Meeting Tomorrow",
    body: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.`,
    date: "2025-03-26T09:15:00",
    read: true,
    labels: ["meeting", "work"]
  },
  {
    id: "3",
    from: "Bob Johnson",
    to: "me@example.com",
    subject: "Weekend Plans",
    body: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had an outdoor adventure. Weather forecast looks good too!`,
    date: "2025-03-26T14:30:00",
    read: true,
    labels: ["personal"]
  },
  {
    id: "4",
    from: "Emily Davis",
    to: "me@example.com",
    subject: "Re: Question about Budget",
    body: `I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation. Can we discuss this when you have time?`,
    date: "2025-03-25T16:45:00",
    read: true,
    labels: ["work", "budget"]
  },
  {
    id: "5",
    from: "David Lee",
    to: "me@example.com",
    subject: "New Project Idea",
    body: `I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market. Let me know when you're free to chat about it.`,
    date: "2025-03-25T10:20:00",
    read: true,
    labels: ["work", "idea"]
  }
];
