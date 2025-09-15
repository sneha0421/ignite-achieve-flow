import { Plus, Filter, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ActivityPost from "./ActivityPost";
import achievementImage from "@/assets/achievement-image.jpg";
import researchImage from "@/assets/research-image.jpg";

const ActivityFeed = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showingTrending, setShowingTrending] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
  ]);

  const trendingTopics = ["Machine Learning", "Internships", "Research", "Hackathons", "Certifications"];

  const handleCreatePost = () => {
    toast({
      title: "Create Post",
      description: "Connect to Supabase to enable post creation and data persistence!",
    });
  };

  const handleFilter = () => {
    setActiveFilter(activeFilter ? null : "filtered");
    toast({
      title: activeFilter ? "Filter Cleared" : "Filter Applied",
      description: "Filter functionality active - connect Supabase for advanced filtering!",
    });
  };

  const handleTrending = () => {
    setShowingTrending(!showingTrending);
    toast({
      title: "Trending Mode",
      description: "Showing trending posts - connect Supabase for real-time trending!",
    });
  };

  const handleLoadMore = () => {
    toast({
      title: "Load More",
      description: "Connect Supabase to load more posts from the database!",
    });
  };

  const handleTopicClick = (topic: string) => {
    toast({
      title: `Filtering by #${topic}`,
      description: "Topic filtering active - connect Supabase for full search functionality!",
    });
  };

  const handleEngagement = (postId: number, type: 'like' | 'comment' | 'share' | 'cheer') => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        if (type === 'like') {
          return {
            ...post,
            engagement: {
              ...post.engagement,
              likes: post.engagement.isLiked ? post.engagement.likes - 1 : post.engagement.likes + 1,
              isLiked: !post.engagement.isLiked
            }
          };
        }
        if (type === 'comment') {
          toast({
            title: "Comment",
            description: "Connect Supabase to enable commenting functionality!",
          });
        }
        if (type === 'share') {
          toast({
            title: "Shared!",
            description: "Post shared - connect Supabase to enable real sharing!",
          });
        }
        if (type === 'cheer') {
          toast({
            title: "Cheered! 🎉",
            description: "You cheered this post - connect Supabase to save interactions!",
          });
        }
      }
      return post;
    }));
  };

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
                onClick={handleCreatePost}
              >
                Share your latest achievement, project, or learning...
              </Button>
            </div>
            <Button 
              className="bg-gradient-primary border-0 px-8"
              onClick={handleCreatePost}
            >
              Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feed Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant={activeFilter ? "default" : "outline"} 
            size="sm" 
            className="gap-2"
            onClick={handleFilter}
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button 
            variant={showingTrending ? "default" : "outline"} 
            size="sm" 
            className="gap-2"
            onClick={handleTrending}
          >
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
                onClick={() => handleTopicClick(topic)}
              >
                #{topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="fade-in">
            <ActivityPost {...post} onEngagement={handleEngagement} />
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button 
          variant="outline" 
          className="px-8"
          onClick={handleLoadMore}
        >
          Load More Activities
        </Button>
      </div>
    </div>
  );
};

export default ActivityFeed;