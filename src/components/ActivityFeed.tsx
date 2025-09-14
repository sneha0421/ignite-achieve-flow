import { Plus, Filter, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ActivityPost from "./ActivityPost";
import achievementImage from "@/assets/achievement-image.jpg";
import researchImage from "@/assets/research-image.jpg";

const ActivityFeed = () => {
  const posts = [
    {
      author: {
        name: "Sarah Johnson",
        avatar: "/api/placeholder/50/50",
        course: "Data Science & AI",
        initials: "SJ"
      },
      activity: {
        title: "Won 1st Place at TechHack 2024",
        type: "Achievement",
        description: "Thrilled to announce that our team won first place at TechHack 2024 with our AI-powered sustainable farming solution! 🏆 This project combines machine learning with IoT sensors to optimize crop yields while reducing water usage. Grateful for my amazing teammates and the opportunity to tackle real-world challenges.",
        image: achievementImage,
        verified: true,
        date: "2 hours ago",
        location: "MIT Tech Park",
        link: "https://certificate.link"
      },
      engagement: {
        likes: 47,
        comments: 12,
        shares: 8,
        isLiked: false
      }
    },
    {
      author: {
        name: "Michael Rodriguez",
        avatar: "/api/placeholder/50/50",
        course: "Computer Engineering",
        initials: "MR"
      },
      activity: {
        title: "Completed Google Cloud Professional Certification",
        type: "Achievement",
        description: "Just passed the Google Cloud Professional Data Engineer certification! 📊 Spent 3 months preparing while juggling coursework. The hands-on labs and real-world projects really made the difference. Ready to apply these cloud skills in upcoming internship applications.",
        verified: false,
        date: "1 day ago",
        location: "Online",
        link: "https://certificate.link"
      },
      engagement: {
        likes: 23,
        comments: 7,
        shares: 3,
        isLiked: true
      }
    },
    {
      author: {
        name: "Emily Zhang",
        avatar: "/api/placeholder/50/50",
        course: "Biomedical Engineering",
        initials: "EZ"
      },
      activity: {
        title: "Published Research Paper on Neural Interfaces",
        type: "Achievement",
        description: "Excited to share that our research on 'Brain-Computer Interfaces for Motor Rehabilitation' has been accepted at the IEEE BioCAS Conference! 🧠 This work explores how neural signals can help stroke patients regain motor functions. Huge thanks to Dr. Smith and the entire research team.",
        image: researchImage,
        verified: true,
        date: "3 days ago",
        location: "Boston Medical Center"
      },
      engagement: {
        likes: 89,
        comments: 15,
        shares: 12,
        isLiked: false
      }
    }
  ];

  const trendingTopics = ["Machine Learning", "Internships", "Research", "Hackathons", "Certifications"];

  return (
    <div className="space-y-6">
      {/* Create Post Card */}
      <Card className="academic-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Plus className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <Button 
                variant="outline" 
                className="w-full justify-start text-muted-foreground h-12 text-left"
              >
                Share your latest achievement, project, or learning...
              </Button>
            </div>
            <Button className="bg-gradient-primary border-0 px-8">
              Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feed Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Trending
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          {posts.length} recent activities
        </div>
      </div>

      {/* Trending Topics */}
      <Card className="academic-card">
        <CardHeader className="py-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 pb-4">
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <Badge 
                key={topic} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
              >
                #{topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Posts */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="fade-in">
            <ActivityPost {...post} />
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline" className="px-8">
          Load More Activities
        </Button>
      </div>
    </div>
  );
};

export default ActivityFeed;