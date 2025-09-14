import { Heart, MessageCircle, Share2, Award, ExternalLink, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ActivityPostProps {
  author: {
    name: string;
    avatar: string;
    course: string;
    initials: string;
  };
  activity: {
    title: string;
    type: string;
    description: string;
    image?: string;
    verified: boolean;
    date: string;
    location?: string;
    link?: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
  };
}

const ActivityPost = ({ author, activity, engagement }: ActivityPostProps) => {
  const getActivityIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'achievement':
      case 'award':
        return <Award className="h-4 w-4" />;
      default:
        return <Award className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'achievement':
      case 'award':
        return 'text-success bg-success/10 border-success/20';
      case 'internship':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'project':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <Card className="activity-post">
      <CardContent className="p-0">
        {/* Post Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {author.initials}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{author.name}</h3>
                  {activity.verified && (
                    <Badge className="verified-badge">
                      <Award className="h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{author.course}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {activity.date}
                  </span>
                  {activity.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {activity.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <Badge className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getActivityColor(activity.type)}`}>
              {getActivityIcon(activity.type)}
              {activity.type}
            </Badge>
          </div>
        </div>

        {/* Post Content */}
        <div className="px-6 pb-4">
          <h4 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h4>
          <p className="text-foreground leading-relaxed">{activity.description}</p>
          
          {activity.link && (
            <Button variant="outline" size="sm" className="mt-3 gap-2">
              <ExternalLink className="h-4 w-4" />
              View Certificate
            </Button>
          )}
        </div>

        {/* Post Image */}
        {activity.image && (
          <div className="px-6 pb-4">
            <div className="rounded-lg overflow-hidden border border-border/50 interactive-hover">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        )}

        {/* Engagement */}
        <div className="px-6 py-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button className={`engagement-button ${engagement.isLiked ? 'text-red-500' : ''}`}>
                <Heart className={`h-4 w-4 ${engagement.isLiked ? 'fill-current' : ''}`} />
                <span>{engagement.likes}</span>
              </button>
              
              <button className="engagement-button">
                <MessageCircle className="h-4 w-4" />
                <span>{engagement.comments}</span>
              </button>
              
              <button className="engagement-button">
                <Share2 className="h-4 w-4" />
                <span>{engagement.shares}</span>
              </button>
            </div>
            
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
              Cheer 🎉
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityPost;