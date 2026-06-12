// Album data only - no logic
const albumData = [
    { 
        id: 1, 
        title: "Summer Vibes Collection", 
        actress: "Yui Hatano, Aoi Sora",
        model: "Yui Hatano", 
        pages: 120, 
        release: "2023-06-10",
        publisher: "Prestige Publishing",
        photographer: "Kenji Tanaka",
        tags: ["Summer", "Beach", "Swimsuit", "Sunset", "Ocean"],
        images: 8,
        cover: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        albumImages: [
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
        ]
    },
    { 
        id: 2, 
        title: "Urban Fashion in Tokyo", 
        actress: "Aoi Tsukasa, Mai Sakura",
        model: "Aoi Tsukasa", 
        pages: 96, 
        release: "2023-05-22",
        publisher: "Tokyo Style",
        photographer: "Hiroshi Sato",
        tags: ["Fashion", "City", "Urban", "Modern", "Streetwear"],
        images: 6,
        cover: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
        albumImages: [
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80"
        ]
    },
    { 
        id: 3, 
        title: "Cherry Blossom Dreams", 
        actress: "Eimi Fukada",
        model: "Eimi Fukada", 
        pages: 150, 
        release: "2023-03-15",
        publisher: "Sakura Media",
        photographer: "Yuki Nakamura",
        tags: ["Spring", "Flowers", "Nature", "Traditional", "Elegant"],
        images: 10,
        cover: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        albumImages: [
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ]
    },
    { 
        id: 4, 
        title: "Night Life Glamour", 
        actress: "Rara Anzai, Yuna Ogura",
        model: "Rara Anzai", 
        pages: 110, 
        release: "2023-08-18",
        publisher: "Glamour Press",
        photographer: "Takashi Watanabe",
        tags: ["Glamour", "Night", "City", "Luxury", "Fashion"],
        images: 7,
        cover: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
        albumImages: [
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80"
        ]
    },
    { 
        id: 5, 
        title: "The Fruit of Temptation Vol.1", 
        actress: "Minamo",
        pages: 18, 
        release: "2023-04-05",
        tags: ["Traditional", "Kimono", "Elegant", "Cultural", "Japan"],
        images: 18,
        cover:   "https://lh3.googleusercontent.com/d/1KSUdzcxHYfBvNHvB5b92sKuWpbyuQHjI",
        albumImages: 
[
    "https://lh3.googleusercontent.com/d/1aPv9t-TfudTrcQza9wtkbE6P6YCKd5C7",
    "https://lh3.googleusercontent.com/d/1-Gd5y21xE7SdFKSxNQRIVb4Z2ZuH9YuM",
    "https://lh3.googleusercontent.com/d/1x3giArTYLEwmaCaIcoRENZ8pIaWLukzf",
    "https://lh3.googleusercontent.com/d/1OFL1_evJdKroKxyKMEh4cvx9aDKuTe22",
    "https://lh3.googleusercontent.com/d/174ScSbVOs8af2eycyr77_5rH1-81fgdk",
    "https://lh3.googleusercontent.com/d/14GMcv-sbtfwPhpdIJEa9GXyGeglDqNmf",
    "https://lh3.googleusercontent.com/d/1lptb3KOXALmOr7Jz8d3ZK1iPhWXDqxCz",
    "https://lh3.googleusercontent.com/d/1JYRJjAzeApWeZw7_Ap93Y2khmTGPuBbZ",
    "https://lh3.googleusercontent.com/d/1NGlqOMZ0OkduAelKAiN4Rah3y8bKnvqi",
    "https://lh3.googleusercontent.com/d/19R3o1rr0n3qYoTwgqNp8390-VxC2xc_6",
    "https://lh3.googleusercontent.com/d/1Xr86fjh96DJlbD_MWf7R9t_GrwNzSrzv",
    "https://lh3.googleusercontent.com/d/13xSSEQNXcKemxci9vdEpSXxmJbBPKuS9",
    "https://lh3.googleusercontent.com/d/1XlU3c0YW2imiwvNq2iKEGaPFfggBySJQ",
    "https://lh3.googleusercontent.com/d/1Q-guCv-yUsXC5FqQixHcp9P9Kiehv6mP",
    "https://lh3.googleusercontent.com/d/139ASG4XFYsSF-P9OzJNf1W--tHUmEWbU",
    "https://lh3.googleusercontent.com/d/12WRxH4sG_lnMxNOcrWRFImNeqRWn6iqE",
    "https://lh3.googleusercontent.com/d/1lhe6JCmadbAtz41lcY6wtzJv26TpLsnj"
]    },
    { 
        id: 6, 
        title: "Mountain Escape", 
        actress: "Miru Sakamichi, Yui Hatano",
        model: "Miru Sakamichi", 
        pages: 130, 
        release: "2023-09-12",
        publisher: "Nature Publishing",
        photographer: "Yamato Suzuki",
        tags: ["Nature", "Mountain", "Adventure", "Outdoor", "Hiking"],
        images: 9,
        cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        albumImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ]
    }
];
